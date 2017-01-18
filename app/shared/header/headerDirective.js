
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


   }]
}
});

