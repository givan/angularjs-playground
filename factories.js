angular.module('angularplayground')
    .factory('myfactory', function () {
        console.log('myfactory called');
        return new MyData();
    })
    .service('myservice', function() {
        console.log('myservice called');
        return new MyData();
    });

function MyData() {
    var timestamp = (new Date()).toISOString();
    this.rtmp = { url : "MyData" + timestamp };
}