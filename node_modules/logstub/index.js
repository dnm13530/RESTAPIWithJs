// index.js
/* eslint no-unused-vars: "off" */

// This class exists to stub out the logger when it is not included
class LogStub {
  constructor() {}

  log(...args) {
    return;
  }

  silly(...args) {
    return;
  }

  debug(...args) {
    return;
  }

  verbose(...args) {
    return;
  }

  info(...args) {
    return;
  }

  warn(...args) {
    return;
  }

  error(...args) {
    return;
  }

  // Console specific
  assert(...args) {
    return;
  }

  clear() {
    return;
  }

  count(...args) {
    return;
  }

  countReset(...args) {
    return;
  }

  dir(...args) {
    return;
  }

  dirxml(...args) {
    return;
  }

  group(...args) {
    return;
  }

  groupCollapsed(...args) {
    return;
  }

  groupEnd(...args) {
    return;
  }

  table(...args) {
    return;
  }

  time(...args) {
    return;
  }

  timeEnd(...args) {
    return;
  }

  timeLog(...args) {
    return;
  }

  // Log4J levels
  fatal(...args) {
    return;
  }

  trace(...args) {
    return;
  }

  all(...args) {
    return;
  }

  // Other logging library levels
  http(...args) {
    return;
  }

  critical(...args) {
    return;
  }

  // bunyan specific
  level() {
    return 30;
  }

  child() {
    return this;
  }

  // StackDriver logging levels
  emergency(...args) {
    return;
  }

  alert(...args) {
    return;
  }

  notify(...args) {
    return;
  }
}

module.exports = LogStub;
