"use strict";

// Use dotenv to read .env vars into Node
require("dotenv").config();

const ENV_VARS = [
  "SOME_VARIABLE",
];

module.exports = {
  port : process.env.PORT || 8080,
  someVariable: process.env.SOME_VARIABLE,

  checkEnvVariables: function() {
    ENV_VARS.forEach(function(key) {
      if (!process.env[key]) {
        console.log("WARNING: Missing the environment variable " + key);
      }
    });
  }
}
