#!/bin/bash -ex

yarn workspaces focus fxa-auth-server
yarn run test-ci
yarn run clean-up-old-ci-stripe-customers
