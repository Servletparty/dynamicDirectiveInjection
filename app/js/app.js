var myApp = angular.module("myApp", ["A", "B", "Container"]);

myApp.controller("MainCtrl", function($scope, $timeout){
    $scope.containerItem = {
        name: "a-tag",
        attributes: {
            color: "#f00"
        }
    };    
});