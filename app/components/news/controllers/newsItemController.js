theatreSite.controller('newsItemController', 
	['$scope','$http','$routeParams', function ($scope,$http,$routeParams, $sce) {



		$http.get("app/components/news/news.json").then(function(response) {
    $scope.news = response.data.news; 
 	
    $scope.item = $routeParams.itemId;
	  

		$scope.title=$scope.news[$scope.item].title;
		$scope.photoUrl=$scope.news[$scope.item].photoUrl;
		$scope.description=$scope.news[$scope.item].descriptionInnerNews;
		$scope.day=$scope.news[$scope.item].day;
		$scope.month=$scope.news[$scope.item].month;	

		headerScroll();
	});
}]).filter('toTrusted', function ($sce) {
    return function (value) {
        return $sce.trustAsHtml(value);
    };
});