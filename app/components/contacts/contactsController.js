theatreSite.controller('contactsController', 
	['$scope','$http','$timeout',function($scope, $http,$timeout, $window) {
		   		 	
   	setMap();
  		
  	$(window ).resize(function() {
		setMap();
   	})
	function setMap(){
		console.log("work");
		if ($(window).width()>769) {
			$(".contacts-bg").height($(window).height()-116);
			$(".contacts-data").height($(window).height()-$(window).height()*0.90);
		}
		if ($(window).width()<=769&&$(window).width()>450) {
		    $(".contacts-bg").height($(window).height());
			$(".contacts-data").height($(window).height()-$(window).height()*0.8-$(".header").height());
		}
		if ($(window).width()<450) {
			$(".contacts-bg").height($(window).height());
			$(".contacts-data").height($(window).height()-$(window).height()*0.7-$(".header").height());
		}
		if ($(window).width()<321) {
			$(".contacts-bg").height($(window).height());
			$(".contacts-data").height($(window).height()-$(window).height()*0.65-$(".header").height());
		}	
	}
}]);






