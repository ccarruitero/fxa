/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define([
  './functional/mailcheck',
  './functional/sync_v3_email_first',
  './functional/fx_firstrun_v2_email_first',
  // new and flaky tests above here
  './functional/sign_in',
  './functional/sign_in_cached',
  './functional/sign_in_blocked',
  './functional/sync_sign_in',
  './functional/sync_force_auth',
  './functional/sign_up',
  './functional/complete_sign_in',
  './functional/complete_sign_up',
  './functional/connect_another_device',
  './functional/send_sms',
  './functional/sync_sign_up',
  './functional/sync_v2_sign_up',
  './functional/sync_v2_sign_in',
  './functional/sync_v2_reset_password',
  './functional/sync_v2_settings',
  './functional/sync_v2_force_auth',
  './functional/sync_v3_email_first',
  './functional/sync_v3_force_auth',
  './functional/sync_v3_reset_password',
  './functional/sync_v3_settings',
  './functional/sync_v3_sign_in',
  './functional/sync_v3_sign_up',
  './functional/fx_desktop_handshake',
  './functional/fx_firstrun_v1_sign_up',
  './functional/fx_firstrun_v1_sign_in',
  './functional/fx_firstrun_v1_settings',
  './functional/fx_firstrun_v2_email_first',
  './functional/fx_firstrun_v2_sign_up',
  './functional/fx_firstrun_v2_settings',
  './functional/fx_ios_v1_sign_in',
  './functional/fx_ios_v1_sign_up',
  './functional/fx_fennec_v1_sign_in',
  './functional/fx_fennec_v1_force_auth',
  './functional/fx_fennec_v1_sign_up',
  './functional/fx_fennec_v1_settings',
  './functional/mob_android_v1',
  './functional/mob_ios_v1',
  './functional/bounced_email',
  './functional/legal',
  './functional/tos',
  './functional/pp',
  './functional/confirm',
  './functional/delete_account',
  './functional/reset_password',
  './functional/sync_reset_password',
  './functional/robots_txt',
  './functional/settings',
  './functional/settings_clients',
  './functional/settings_common',
  './functional/settings_change_email.js',
  './functional/settings_secondary_emails.js',
  './functional/sync_settings',
  './functional/change_password',
  './functional/force_auth',
  './functional/force_auth_blocked',
  './functional/404',
  './functional/500',
  './functional/pages',
  './functional/back_button_after_start',
  './functional/cookies_disabled',
  './functional/fonts',
  './functional/password_visibility',
  './functional/avatar',
  './functional/alternative_styles',
  './functional/email_opt_in',
  './functional/refreshes_metrics',
  './functional/upgrade_storage_formats'
], function () {});
