import supertest from 'supertest';
const request = supertest('https://gorest.co.in/public-api/');

import { expect } from 'chai';

const TOKEN =
  'f23c96ab955134d34fb15a05c891320a81c0a6a309c9f481604e380d19bef872';

describe('Users', () => {
  it('GET /users', (done) => {
    request.get(`users?access-token=${TOKEN}`).end((err, res) => {
      expect(res.body.data).to.not.be.empty;
      done();
    });
  });
});
