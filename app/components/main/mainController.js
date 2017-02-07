theatreSite.controller('mainController', 
	['$scope','$http',function($scope, $http) {
	
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

setPosterSize();

    $(window).resize(function() {
     
      setPosterSize();
    });
  
function setPosterSize(){
    if ($(window).width()>1230) {
      $(".poster").height(((1230*0.488)*0.55)*1.4);
     
    }
    if ($(window).width()<1230&&$(window).width()>1000) {
      $(".poster").height((($(window).width())*0.24)*1.4);
     
    }
    if ($(window).width()<1000&&$(window).width()>700) {
      $(".poster").height((($(window).width())*0.338)*1.4);
     
    }
    if ($(window).width()<700&&$(window).width()>620) {
      $(".poster").height((($(window).width())*0.44)*1.4);
     
    }
    if ($(window).width()<620) {
      $(".poster").height(($(window).width()*0.94)*1.4);
      
    }
  }


  $http.get("app/components/news/news.json").then(function(response) {	
    $scope.news = response.data.news;
  });
   $http.get("app/components/plays/plays.json").then(function(response) { 
    $scope.plays = response.data.plays;
  });
//       $(document).on("pageload",function(){
//   $("body").removeClass("preload");
//   alert("pageload event fired!");
// });

}]);


