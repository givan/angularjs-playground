angular.module('angularplayground')
    .controller('MultipleDirectivesSharingModel', ['$scope', function($scope) {
        $scope.playbackSettings = [
            {url:'http://pds-strike.fciis.net', name:'g1'},
            {url:'http://pds-strike.fciis.net', name:'g1'},
            {url:'http://pds-strike.fciis.net', name:'g1'}
        ];
    }])

    .controller('tfbroadcast.controllers.flashPlayback', ['$scope', 'myfactory', function($scope, mf) {
        $scope.playback = mf;
    }]);