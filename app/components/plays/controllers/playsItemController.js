
theatreSite.controller('playsItemController', 
	['$scope','$http','$routeParams', function ($scope,$http,$routeParams, $sce) {



		$http.get("app/components/plays/plays.json").then(function(response) {
    $scope.plays = response.data.plays; 
 	
    $scope.item = $routeParams.itemId;
	  

		$scope.title=$scope.plays[$scope.item].title;
		$scope.photoUrl=$scope.plays[$scope.item].photoUrlforPlays;
		$scope.status=$scope.plays[$scope.item].status;
		$scope.description=$scope.plays[$scope.item].description;
		$scope.role=$scope.plays[$scope.item].role;
$http.get("app/components/troupe/troupe.json").then(function(response) { 
    	$scope.roles = response.data.troupe;
    	// console.log($scope.role);
    	// // console.log($scope.roles.length);
    	// for (var i = 0; i < $scope.roles.length; i++) {
	    // 	if($scope.role == $scope.roles[i].plays){
	    // 		console.log($scope.roles[i].photoUrl);
		   //  	// $scope.currenturl = $scope.roles[i].photoUrl;
		   //  	$scope.currentrole = $scope.roles[i].role;
		   //  	console.log($scope.currentrole);
		   //  	$scope.currentname = $scope.roles[i].name;
	    // 	}
    	// }

$scope.currentrole=$scope.role;

// console.log(currentrole);

// var currentRoleArrayItem=[];
// var currentRoleArray=[];
// var currenturl=[];
// var nameArray=[];


// for (var i = 0; i < $scope.roles.length; i++) {
// 	if($scope.role == $scope.roles[i].plays){
     
//         // photoUrlArray.push($scope.roles[i].photoUrl);
//         // roleArray.push($scope.roles[i].role);
//         // nameArray.push($scope.roles[i].name);
//         currentRoleArray.push($scope.roles[i].photoUrl);
//         currentRoleArray.push($scope.roles[i].role);
//         currentRoleArray.push($scope.roles[i].name);
// // currentRoleArray.push(currentRoleArrayItem[i]);
//       }

//     }
 
// for (var i = 0; i < currentRoleArray.length; i++) {
// 	console.log(currentRoleArray[i+3]);

//     }
// console.log(currenturl);
    // $scope.currenturl=photoUrlArray;
    // $scope.currentrole=roleArray;
    // $scope.currentname=nameArray;





  });
		headerScroll();
	});
		
}]).filter('toTrusted', function ($sce) {
    return function (value) {
        return $sce.trustAsHtml(value);
    };
});