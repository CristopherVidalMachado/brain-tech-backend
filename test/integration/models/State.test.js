var util = require('util');

describe('State (model)', function() {

  describe('#find()', function() {
    it('should return all States', function (done) {
      User.find({})
      .then(function(allStates) {

        if (allStates.length == 0 ) {
          return done(new Error(
            'should return all States'+
            'But instead, got: '+util.inspect(allStates, {depth:null})+''
          ));
        }

        return done();

      })
      .catch(done);
    });
  });

});
