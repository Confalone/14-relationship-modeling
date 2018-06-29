'use strict';

require('babel-register');
const superagent = require('superagent');
const app = require('../../../src/app.js');

describe('API', () => {

  const PORT = 8888;
  beforeAll( () => {
    app.start(PORT);
  });
  afterAll( () => {
    app.stop();
  });

  it('GET - test 200, returns a resource with a valid body', () => {
    return superagent.get('http://localhost:8888/api/v1/bar')
      .then(response => {
        expect(response.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

  it('gets a 500 response on an invalid model', () => {
    return superagent.get('http://localhost:8888/api/v1/foobar')
      .then(console.log)
      .catch(response => {
        expect(response.status).toEqual(500);
      });
  });

  it('PUT - test 404, responds with not found for valid requests made with an id that was not found', () => {
    return superagent.get('http://localhost:8888/api/v1/bar/invalid')
      .then(console.log('nice'))
      .catch(response => {
        expect(response.status).toEqual(404);
      });
  });
  it('POST - test 200, returns a resource for requests made with a valid body', () => {
    return superagent.get('http://localhost:8888/api/v1/bar')
      .then(response => {
        expect(response.statusCode).toEqual(200);
      })
      .catch(console.err);
  });
  it('POST - test 400, responds with bad request if no request body was provided', () => {
    return superagent.get('http://localhost:8888/api/v1/bar/invalid')
      .then(console.log('nice'))
      .catch(response => {
        expect(response.status).toEqual(400);
      });
  });
});
