'use strict';

describe('Service: videourl', function () {

  // load the service's module
  beforeEach(module('testParseAppApp.videourl'));

  // instantiate service
  var videourl;
  beforeEach(inject(function (_videourl_) {
    videourl = _videourl_;
  }));

  it('should do something', function () {
    expect(!!videourl).toBe(true);
  });

});
