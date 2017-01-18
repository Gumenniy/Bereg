theatreSite.controller('producerController', 
	['$scope','$http',function($scope, $http) {
	
    $http.get("app/components/producer/json/maininfo.json").then(function(response) {
    	
      $scope.maininfo = response.data.maininfo;
	  
	  console.log($scope.maininfo.photoUrl);

    });	
   $http.get("app/components/producer/json/photos.json").then(function(response) {
    	
      $scope.photos = response.data.photos;
	  
	  

    });	
}]);
