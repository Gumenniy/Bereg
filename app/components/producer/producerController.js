theatreSite.controller('producerController', 
	['$scope','$http',function($scope, $http) {
	
    $http.get("app/components/producer/json/photos.json").then(function(response) {
    	
      $scope.photos = response.data.photos;
	  
	  

    });	
   window.onscroll = function() {
       
        if($(window).scrollTop()!=0){
document.querySelector(".header").style.background = "black";
}
else{
 document.querySelector(".header").style.background = "rgba(0, 0, 0, 0.4)"; 
}
 if(document.querySelector(".fa-chevron-down")){
          document.querySelector(".fa-chevron-down").style.opacity = "0";
        }
      }
   $http.get("app/components/producer/json/plays.json").then(function(response) {
    	
      $scope.plays = response.data.plays;
	  

    });	
}]).filter('toTrusted', function ($sce) {
    return function (value) {
        return $sce.trustAsHtml(value);
    };
}); 