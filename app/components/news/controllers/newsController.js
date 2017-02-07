theatreSite.controller('newsController', 
	['$scope','$http',function($scope, $http) {
	
    $http.get("app/components/news/news.json").then(function(response) {
    	
     
      $scope.news=response.data.news;
//       $scope.newsItems = [];

//       var windowHeight = $(document).height();
//       var header = $(".header").height();
//       if ($(window).width()<450) {
//         var newsItem = 300;
//       }
//       else{
//         var newsItem = 120;
//       }
      
//       var workRegion = windowHeight - header;
//       var newsQuantity = Math.round(workRegion / newsItem) ;
// //       if(newsQuantity>=$scope.news.length){
// //         newsQuantity=$scope.news.length;
// // // document.querySelector(".fa-chevron-down").style.opacity = "0";
// //       }
//       for (var i = 0; i < newsQuantity; i++) {
//         $scope.newsItems.push($scope.news[i]);
        
//       }
// console.log(newsQuantity);
      
   
      window.onscroll = function() {
        // if($scope.news.length !=newsQuantity&&$(window).scrollTop() == $(document).height() - $(window).height()){
        //   $scope.newsItems.push($scope.news[newsQuantity]);
        //   newsQuantity = newsQuantity+1;
        //   $scope.$apply();
        // }
        // if(document.querySelector(".fa-chevron-down")){
        //   document.querySelector(".fa-chevron-down").style.opacity = "0";
        // }
        // if($scope.news.length ==newsQuantity&&document.querySelector(".event-list li:last-of-type")){
        //   document.querySelector(".event-list li:last-of-type").style.opacity = "1";
        // }
        if($(window).width()>1000)
          {
            if($(window).scrollTop()!=0){
              document.querySelector(".header").style.background = "black";
            }
            else{
              document.querySelector(".header").style.background = "rgba(0, 0, 0, 0.4)"
            }
          }
      }

    });	
}]);