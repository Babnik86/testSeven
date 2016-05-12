'use strict';

angular.module('testParseAppApp', [
    'testParseAppApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'LocalStorageModule'
])
    .config(function ($urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    })
    .filter('trusted', ['$sce', function ($sce) {
        'use strict';

        return function (url) {
            return $sce.trustAsResourceUrl(url);
        };
}])
    /*.directive('videoPlayer', function ($compile) {
            return {
                restrict: 'E',
                template: '<video controls poster="{{$ctrl.currentVideo.poster}}" width="720" height="480" preload="none" loop="loop"><source type="video/mp4" src="{{$ctrl.trustSrc($ctrl.currentVideo.src)}}"></source></video>',
                replace: false,
                link: function ($scope, element, attrs) {
                    attrs.$observe('videoSrc', function (value) {

                        element.find('source').attr("src", value);
                    })

                    // атрибуты именуются с применением «верблюжьей» нотации
                    attrs.$observe('videoPoster', function (value) {
                        console.log(element)
                        var video = element.find('video');
                        element.find('video').remove();
                        video = video.attr('poster', value);
                        console.log(video)
                        element.html("<p>dfgd</p>");
                        $compile(element.contents())($scope);
                    })
                }
            }
        })*/