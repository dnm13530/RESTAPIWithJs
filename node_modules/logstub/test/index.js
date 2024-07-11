const chai = require('chai');
const expect = chai.expect;

describe('logstub', () => {
  const LogStub = require('..');
  const logger = new LogStub();

  it('load', () => {
    const MyModule = require('..');
    const myClass = new MyModule();

    expect(myClass).to.be.instanceof(LogStub);
  });

  it('log', () => {
    expect(logger.log()).to.be.equal(undefined);
  });

  it('silly', () => {
    expect(logger.silly()).to.be.equal(undefined);
  });

  it('debug', () => {
    expect(logger.debug()).to.be.equal(undefined);
  });

  it('verbose', () => {
    expect(logger.verbose()).to.be.equal(undefined);
  });

  it('info', () => {
    expect(logger.info()).to.be.equal(undefined);
  });

  it('warn', () => {
    expect(logger.warn()).to.be.equal(undefined);
  });

  it('error', () => {
    expect(logger.error()).to.be.equal(undefined);
  });

  // Log4J errors
  it('fatal', () => {
    expect(logger.fatal()).to.be.equal(undefined);
  });

  it('trace', () => {
    expect(logger.trace()).to.be.equal(undefined);
  });

  it('all', () => {
    expect(logger.all()).to.be.equal(undefined);
  });

  // Critical
  it('critical', () => {
    expect(logger.critical()).to.be.equal(undefined);
  });

  it('http', () => {
    expect(logger.http()).to.be.equal(undefined);
  });

  // Console
  it('assert', () => {
    expect(logger.assert()).to.be.equal(undefined);
  });

  it('clear', () => {
    expect(logger.clear()).to.be.equal(undefined);
  });

  it('count', () => {
    expect(logger.count()).to.be.equal(undefined);
  });

  it('countReset', () => {
    expect(logger.countReset()).to.be.equal(undefined);
  });

  it('dir', () => {
    expect(logger.dir()).to.be.equal(undefined);
  });

  it('dirxml', () => {
    expect(logger.dirxml()).to.be.equal(undefined);
  });

  it('group', () => {
    expect(logger.group()).to.be.equal(undefined);
  });

  it('groupCollapsed', () => {
    expect(logger.groupCollapsed()).to.be.equal(undefined);
  });

  it('groupEnd', () => {
    expect(logger.groupEnd()).to.be.equal(undefined);
  });

  it('table', () => {
    expect(logger.table()).to.be.equal(undefined);
  });

  it('time', () => {
    expect(logger.time()).to.be.equal(undefined);
  });

  it('timeEnd', () => {
    expect(logger.timeEnd()).to.be.equal(undefined);
  });

  it('timeLog', () => {
    expect(logger.timeLog()).to.be.equal(undefined);
  });

  // Bunyan
  it('level', () => {
    expect(logger.level()).to.be.equal(30);
  });

  it('child', () => {
    expect(logger.child()).to.be.equal(logger);
  });

  // Stack Driver
  it('emergency', () => {
    expect(logger.emergency()).to.be.equal(undefined);
  });

  it('alert', () => {
    expect(logger.alert()).to.be.equal(undefined);
  });

  it('notify', () => {
    expect(logger.notify()).to.be.equal(undefined);
  });
});
