
theatreSite.controller('playsItemController', 
	['$scope','$http','$routeParams', function ($scope,$http,$routeParams, $sce) {



		$http.get("app/components/plays/plays.json").then(function(response) {
    $scope.plays = response.data.plays; 
 	
    $scope.item = $routeParams.itemId;
	  

		$scope.title=$scope.plays[$scope.item].title;
		$scope.photoUrl=$scope.plays[$scope.item].photoUrlforPlays;
		$scope.status=$scope.plays[$scope.item].status;
		$scope.description=$scope.plays[$scope.item].description;
		// $scope.month=$scope.news[$scope.item].month;	

		headerScroll();
	});
		$http.get("app/components/troupe/troupe.json").then(function(response) { 
    $scope.roles = response.data.troupe;
  });
}]).filter('toTrusted', function ($sce) {
    return function (value) {
        return $sce.trustAsHtml(value);
    };
});