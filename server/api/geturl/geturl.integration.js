'use strict';

var app = require('../..');
import request from 'supertest';

describe('Geturl API:', function() {

  describe('GET /api/geturls', function() {
    var geturls;

    beforeEach(function(done) {
      request(app)
        .get('/api/geturls')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          geturls = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      geturls.should.be.instanceOf(Array);
    });

  });

});
