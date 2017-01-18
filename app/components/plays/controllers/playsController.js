theatreSite.controller('playsController', 
	['$scope','$http',function($scope, $http) {
	 
   $http.get("app/components/plays/plays.json").then(function(response) { 
    $scope.plays = response.data.plays;
  });
}]);