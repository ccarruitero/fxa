/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// This module implements logic for managing account cad (connect another device) reminders.
//
'use strict';

const redis = require('./redis');
const KEY = 'first';

class CadReminders {
  constructor(config, log) {
    this.redis = redis(
      {
        ...config.redis,
        ...config.cadReminders.redis,
        enabled: true,
      },
      log
    );
    this.log = log;
    this.rolloutRate = config.cadReminders.rolloutRate;
    this.interval = config.cadReminders.interval;
  }

  async create(uid) {
    try {
      const now = Date.now();
      await this.redis.zadd(KEY, now, uid);
      this.log.info('cadReminders.create', {
        uid,
      });
    } catch (err) {
      this.log.error('cadReminders.create.error', {
        err,
        uid,
      });
      throw err;
    }
  }

  async delete(uid) {
    try {
      await this.redis.del(uid);
      this.log.info('cadReminders.delete', {
        uid,
      });
    } catch (err) {
      this.log.error('cadReminders.delete.error', {
        err,
        uid,
      });
      throw err;
    }
  }

  async process() {
    try {
      const now = Date.now();
      const cutoff = now - this.interval;

      const items = await this.redis.zpoprangebyscore(
        KEY,
        0,
        cutoff,
        'WITHSCORES'
      );
      const reminders = [];

      let index = 0;
      for (const item of items) {
        if (index % 2 === 0) {
          const uid = item;
          reminders.push({ uid });
        } else {
          reminders[(index - 1) / 2].timestamp = item;
        }
        index++;
      }
      this.log.info('cadReminders.process', { KEY, now, cutoff });
      return reminders;
    } catch (err) {
      this.log.error('cadReminders.process.error', { err });
      throw err;
    }
  }

  /**
   * Close the underlying redis connections.
   *
   * @returns {Promise}
   */
  close() {
    return redis.close();
  }
}

module.exports = (config, log) => {
  return new CadReminders(config, log);
};
