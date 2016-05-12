'use strict';

describe('Service: parsevideourl', function () {

  // load the service's module
  beforeEach(module('testParseAppApp.parsevideourl'));

  // instantiate service
  var parsevideourl;
  beforeEach(inject(function (_parsevideourl_) {
    parsevideourl = _parsevideourl_;
  }));

  it('should do something', function () {
    expect(!!parsevideourl).toBe(true);
  });

});
