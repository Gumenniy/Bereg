theatreSite.controller('mainController', 
	['$scope','$http',function($scope, $http) {
	 
  if ($(window).width()>1230) {
    $(".poster").height(((1230*0.488)*0.55)*1.4);
   
  }
  if ($(window).width()<1230&&$(window).width()>900) {
    $(".poster").height((($(window).width())*0.24)*1.4);
   
  }
  if ($(window).width()<900&&$(window).width()>680) {
    $(".poster").height((($(window).width())*0.338)*1.4);
   
  }
  if ($(window).width()<700&&$(window).width()>580) {
    $(".poster").height((($(window).width())*0.44)*1.4);
   
  }
  if ($(window).width()<480) {
    $(".poster").height(($(window).width()*0.94)*1.4);
    
  }

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



    $( window ).resize(function() {
      if ($(window).width()<480) {
     $(".poster").height((($(window).width()*0.95)*0.98)*1.4);
   }
   
     if ($(window).width()<1230&&$(window).width()>900) {
    $(".poster").height((($(window).width())*0.24)*1.4);
   
  }
  if ($(window).width()<900&&$(window).width()>680) {
    $(".poster").height((($(window).width())*0.338)*1.4);
   
  }
  if ($(window).width()<700&&$(window).width()>580) {
    $(".poster").height((($(window).width())*0.44)*1.4);
   
  }
  if ($(window).width()>1230) {
    $(".poster").height(((1230*0.488)*0.55)*1.4);}

    });
  
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


