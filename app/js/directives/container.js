var container = angular.module("Container", []);

container.controller("containerCtrl", function($scope){
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
        link: function(scope, element, attrs){
            var template = '<div id="container">';
            var item = '';
            if(scope.item !== undefined){
                item = '<' + scope.item.name;
                angular.forEach(scope.item.attributes, function(key, value) {
                    item += ' ' + value + '="' + key + '"'
                });
                item += ' ></' + scope.item.name + '>';
                
            }
            template += item + '</div>';
            element.html(template);
            $compile(element.contents())(scope);
        }
    };
});