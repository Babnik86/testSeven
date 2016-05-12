'use strict';

(function () {

    class MainController {

        constructor(VideoUrlFactory, VideoUrlService, $sce) {
            var self = this;
            this.VideoUrl = VideoUrlFactory;
            this.VideoUrlService = VideoUrlService;
            this.videoList = this.VideoUrlService.getVideoList();
            this.videoUrlModel = "https://www.fotolia.com/id/";
            this.word = "Habrahabra";
            this.getVideoByUrl = function () {
                self.VideoUrl.get({
                        url: this.videoUrlModel
                    }).$promise
                    .then(function (response) {
                        self.videoList = self.VideoUrlService.addVideo(response.videoUrl, response.posterUrl);
                    }).catch(function (err) {
                        alert(err.data.error);
                    });
            };
            this.removeVideo = function (key) {
                self.videoList = this.VideoUrlService.removeVideo(key);
            };
            this.removeAllUrl = function (key) {
                self.videoList = this.VideoUrlService.removeAllUrl(key);
            };
            this.clickVideo = function (key) {
                self.currentVideo = this.VideoUrlService.getCurrentVideo(key);
            };
            this.trustSrc = function (src) {
                return $sce.trustAsResourceUrl(src);
            }

        };




        $onInit() {
            //console.log($scope)
        };
    }

    angular.module('testParseAppApp')
        .component('main', {
            templateUrl: 'app/route/main/main.html',
            controller: MainController
        });

})();