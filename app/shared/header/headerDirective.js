
theatreSite.directive('header', function () {
    return {
        restrict: 'A', 
        replace: true,
        templateUrl: "app/shared/header/header.html",
        controller: ['$scope', '$http', '$location', function ($scope, $http, $location) {
             
  $scope.getClass = function (path) {
    if ($location.path().substr(0, path.length) === path) {
      return 'activeItem';

    } else {
      return '';
    }
  }


  $scope.navView = function () {
   document.querySelector("nav").classList.add("visible");
   
   document.querySelector("nav #main-nav").style.opacity = "1";
  }
$scope.closeNav = function (){
  
  if(document.querySelector(".visible")){
      
      document.querySelector("nav").classList.remove("visible");
    }
}
function setTopForMenu(){

if($(window).width()>770){
$("#main-nav").css("margin-top",0+"px");  
}
else{
  console.log($("#main-nav").height());
  console.log($(window).height());
var difference = ($(window).height() - $("#main-nav").outerHeight(true)) / 2;
$("#main-nav").css("margin-top", difference+"px");
}

}
$(window ).resize(function() {
   setTopForMenu();
    })
   }]
}
});

