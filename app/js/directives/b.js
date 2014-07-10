angular.module("B", []).directive("bTag", function(){
   return {
       restrict: "EA",
       templateUrl: "template/b.html",
       replace: true,
       link: function(scope, element, attrs){
           
       }
   };
});