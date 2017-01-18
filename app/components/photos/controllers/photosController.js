theatreSite.controller('photosController', 
	['$scope','$http',function($scope, $http) {
	
    $http.get("app/components/photos/photos.json").then(function(response) {
    	
      $scope.photos = response.data.photos;

    });	
   
}]);