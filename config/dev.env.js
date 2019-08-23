'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  URL_ONLINE: '"https://extreme-mistake.glitch.me/"',
  //URL_ONLINE: '"https://4000-b14ffabf-cac5-4f31-89bd-68e42cb3ab3f.ws-ap0.gitpod.io/"',
  URL_LOCAL: '"http://localhost:4000/"',
})
