var container = angular.module("Container", []);

container.controller("containerCtrl", function($scope){
    
    $scope.item = {
        tag: "a-tag",
        color: "#f00"
    };
    console.log($scope);
});

container.directive("container", function($compile){
    return {
        restrict: "EA",
        replace: true,
        templateUrl: "template/container.html",
        scope: {
            item: "="
        },
        controller: function($scope, $element, $attrs){
            console.log($scope);
        },
        link: function(scope, element, attrs){
            
//            var template = '<div id="container">';
//            var item = '';
//            if(scope.item !== undefined){
//                item = '<' + scope.item;
////                angular.forEach(attrs, function(key, value) {
////                    item += ' ' + value + '="' + key + '"'
////                });
//                item += ' ></' + scope.item + '>';
//                
//            }
//            template += item + '</div>';
//            element.html(template);
//            $compile(element.contents())(scope);
        }
    };
});