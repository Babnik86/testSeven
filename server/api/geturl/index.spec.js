'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var geturlCtrlStub = {
  index: 'geturlCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var geturlIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './geturl.controller': geturlCtrlStub
});

describe('Geturl API Router:', function() {

  it('should return an express router instance', function() {
    geturlIndex.should.equal(routerStub);
  });

  describe('GET /api/geturls', function() {

    it('should route to geturl.controller.index', function() {
      routerStub.get
        .withArgs('/', 'geturlCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});
