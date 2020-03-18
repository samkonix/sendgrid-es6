"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const sgMail = require('@sendgrid/mail');

module.exports = function sendGrid(msg) {
  sgMail.sendGrid(msg);
}

module.exports = function setApiKey(apiKey) {
  sgMail.setApiKey(apiKey);
}

/*
var _bunyan = require("bunyan");

var _bunyan2 = _interopRequireDefault(_bunyan);

var _bunyanFormat = require("bunyan-format");

var _bunyanFormat2 = _interopRequireDefault(_bunyanFormat);

var _loggly = require("./loggly");

var _loggly2 = _interopRequireDefault(_loggly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// configure bunyan logging module for reaction server
// See: https://github.com/trentm/node-bunyan#levels
var levels = ["FATAL", "ERROR", "WARN", "INFO", "DEBUG", "TRACE"];

// set stdout log level
var level = process.env.REACTION_LOG_LEVEL || "INFO";

// allow overriding the stdout log formatting
// available options: short|long|simple|json|bunyan
// https://www.npmjs.com/package/bunyan-format
var outputMode = process.env.REACTION_LOG_FORMAT || "short";

level = level.toUpperCase();

if (!levels.includes(level)) {
  level = "INFO";
}

// default console config (stdout)
var streams = [{
  level: level,
  stream: (0, _bunyanFormat2.default)({ outputMode: outputMode })
}];

// Loggly config (only used if configured)
var logglyToken = process.env.LOGGLY_TOKEN;
var logglySubdomain = process.env.LOGGLY_SUBDOMAIN;

if (logglyToken && logglySubdomain) {
  var logglyStream = {
    type: "raw",
    level: process.env.LOGGLY_LOG_LEVEL || "DEBUG",
    stream: new _loggly2.default({
      token: logglyToken,
      subdomain: logglySubdomain
    }, process.env.LOGGLY_BUFFER_LENGTH || 1)
  };
  streams.push(logglyStream);
}

// create default logger instance
var Logger = _bunyan2.default.createLogger({
  name: process.env.REACTION_LOGGER_NAME || "Reaction",
  streams: streams
});
*/


// Export bunyan so users can create their own loggers from scratch if needed.
// In order to be compatible with Node ES modules, we can't have named CommonJS
// exports, so we set these as properties of the default export instead.

/*Logger.bunyan = _bunyan2.default;
Logger.bunyanFormat = _bunyanFormat2.default;

exports.default = Logger;
module.exports = exports.default;
module.exports.default = exports.default;*/

