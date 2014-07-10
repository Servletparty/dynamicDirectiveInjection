angular.module("Container", []).directive("container", function($compile){
    return {
        restrict: "EA",
        //replace: true,
        scope: {
            item: "@"
        },
        controller: function($scope, $element, $attrs){
            var template = '<div id="container">';
            var item = '';
            if($scope.item !== undefined){
                item = '<' + $scope.item;
//                angular.forEach(attrs, function(key, value) {
//                    item += ' ' + value + '="' + key + '"'
//                });
                item += ' ></' + $scope.item + '>';
                
            }
            template += item + '</div>';
            $element.html(template);
            $compile($element.contents())($scope);
        },
        link: function(scope, element, attrs){
            var template = '<div id="container">';
            var item = '';
            if(scope.item !== undefined){
                item = '<' + scope.item;
//                angular.forEach(attrs, function(key, value) {
//                    item += ' ' + value + '="' + key + '"'
//                });
                item += ' ></' + scope.item + '>';
                
            }
            template += item + '</div>';
            element.html(template);
            $compile(element.contents())(scope);
        }
    };
});