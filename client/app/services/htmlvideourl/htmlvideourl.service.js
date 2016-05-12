'use strict';

angular.module('testParseAppApp')
    .factory('VideoUrlFactory', ['$resource', function ($resource) {

        return $resource('/api/geturls', {
            url: '@url'
        }, {
            get: {
                method: 'GET',
                isArray: false
            }
        });
    }])