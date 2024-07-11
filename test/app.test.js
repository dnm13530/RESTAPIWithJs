const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('GET /', () => {
  it('should return Hello, world!', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /text\/html/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Hello, world!');
        done();
      });
  });
});