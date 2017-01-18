theatreSite.controller('photosItemController', 
	['$scope', '$routeParams','$localStorage','$http', function ($scope, $routeParams, $localStorage, $http) {
    $scope.item = $routeParams.orderId;
		
	$http.get("app/components/photos/photos.json").then(function(response) {
    	
      $scope.photos = response.data.photos;

    });	
	
}])

