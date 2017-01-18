theatreSite.controller('troupeController', 
	['$scope','$http',function($scope, $http) {
	
    $http.get("app/components/troupe/troupe.json").then(function(response) {
    	
    $scope.troupe = response.data.troupe;
    setImgHeight();
      
    $(window).resize(function() {
    setImgHeight();
    })

window.onscroll = function() {
       
 if(document.querySelector(".fa-chevron-down")){
          document.querySelector(".fa-chevron-down").style.opacity = "0";
        }
        headerScroll();
      }


  function setImgHeight(){


    if ($(window).width()>1200) {
     
      $(".troupeView").height(534);
     
    } 
    if ($(window).width()<1200&&$(window).width()>770) {
      
      $(".troupeView").height($(window).width()*0.95*0.29*1.55);
    } 
    if ($(window).width()<770&&$(window).width()>580) {
      
      $(".troupeView").height($(window).width()*0.95*0.48*1.55);
    } 
    if ($(window).width()<580) {
      
      $(".troupeView").height($(window).width()*0.95*1.55);
    } 
  }
   


    });	
   
}]);


