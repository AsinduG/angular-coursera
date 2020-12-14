(function () {

    angular.module('myFirstApp', [])

    .controller('myController', function($scope) {
    $scope.name = "Asindu";
    $scope.sayHello = function() {
        return "HELLO COURSERA!";
    }
});
});