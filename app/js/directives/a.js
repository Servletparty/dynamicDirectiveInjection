angular.module("A", []).directive("aTag", function(){
   return {
       restrict: "EA",
       templateUrl: "template/a.html",
       replace: true,
       scope: {
           color: "@aColor"
       },
       link: function(scope, element, attrs){
           element.css("color", scope.color);
       }
   };
});