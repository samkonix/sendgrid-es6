"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const sgMail = require('@sendgrid/mail');

module.exports = {
  sendGrid: sgMail.sendGrid,
  setApiKey: sgMail.setApiKey
};
module.exports.default = module.exports;

