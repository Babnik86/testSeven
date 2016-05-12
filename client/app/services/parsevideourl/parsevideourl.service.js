'use strict';

angular.module('testParseAppApp')
    .service('VideoUrlService', ['localStorageService', function (localStorageService) {

        this.getVideoList = function () {
            return localStorageService.keys();
        };

        this.addVideo = function (videourl, posterurl) {
            localStorageService.set(videourl, posterurl);
            return this.getVideoList();
        };

        this.removeVideo = function (key) {
            localStorageService.remove(key);
            return this.getVideoList();
        };

        this.removeAllUrl = function (key) {
            return localStorageService.clearAll();
        };

        this.getCurrentVideo = function (key) {
            return {
                src: key,
                poster: localStorageService.get(key)
            };
        };


    }]);