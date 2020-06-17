const env = require('./env');
const ssl = require('./ssl');
const data = require('./data');
const config = require('./config');
const logger = require('./logger');


// Define a schema
const schema = Object.assign(
  {
    https: {
      doc: "https",
      format: Boolean,
      default: false,
      env: "HTTPS",
      arg: "https",
    },
    web: {
      doc: "web",
      format: Boolean,
      default: false,
      env: "WEB",
      arg: "web",
    },
  },
  env,
  ssl,
  data,
  config,
  logger,
);

module.exports = schema;
