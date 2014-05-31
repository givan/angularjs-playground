angular.module('angularplayground')
    .directive('flashPlayback', function() {
        return {
            scope: true, // isolated scope
            controller: 'tfbroadcast.controllers.flashPlayback',
            restrict: "AE",
            replace: false,
            terminal: true,
            priority: 100,
            templateUrl: 'flashPlaybackTpl'
        }
    });