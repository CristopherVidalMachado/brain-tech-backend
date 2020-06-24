var supertest = require('supertest');

describe('StateController.get', function() {

  describe('#getAllStates()', function() {
    it('should test /states', function (done) {
      supertest(sails.hooks.http.app)
      .get('/states')
      .send()
      .expect(200)
      .expect('location','/states', done);
    });
  });

});
