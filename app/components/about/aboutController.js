theatreSite.controller('aboutController', 
	['$scope','$http','$timeout','$window',function($scope, $http,$timeout, $window) {
	$http.get("app/components/about/about.json").then(function(response) {
   $scope.aboutitems = response.data.aboutitems; 
   $scope.windowWidth = $window.innerWidth;
	setImgHeight();
      
    $(window).resize(function() {
    setImgHeight();
    })




  function setImgHeight(){


    // if ($(window).width()<480) {
      
    //   $(".raw .col").height($(window).width()*0.95*0.81);
    // } 
  




   	headerScroll();
	}
  });
}]);






