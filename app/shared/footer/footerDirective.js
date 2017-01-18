theatreSite.directive('footer', function () {
    return {
        restrict: 'A', 
        replace: true,
        templateUrl: "app/shared/footer/footer.html",
  //       controller: ['$scope', '$http', '$location', function ($scope, $http, $location) {
             
  // $scope.getClass = function (path) {
  //   if ($location.path().substr(0, path.length) === path) {
  //     return 'activeItem';
  //   } else {
  //     return '';
  //   }
  // }
  //  }]
}
});