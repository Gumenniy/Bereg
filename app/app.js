var theatreSite = angular.module('theatreSite', [  
    'ngRoute',
    'ngStorage',
    'ngSanitize'
    
  ])
.config(function($routeProvider){
        
        $routeProvider.when('/main',
        {
            templateUrl:'app/components/main/mainView.html',
            controller:'mainController'
        });

        $routeProvider.when('/about',
        {
            templateUrl:'app/components/about/aboutView.html',
            controller:'aboutController'
        });
       
        $routeProvider.when('/producer',
        {
            templateUrl:'app/components/producer/producerView.html',
            controller:'producerController'
        });
		$routeProvider.when('/troupe',
        {
            templateUrl:'app/components/troupe/troupeView.html',
            controller:'troupeController'
        });
		$routeProvider.when('/plays',
        {
            templateUrl:'app/components/plays/views/playsView.html',
            controller:'playsController'
        });
        $routeProvider.when('/plays/:itemId',
        {
            templateUrl:'app/components/plays/views/playsItemView.html',
            controller:'playsItemController'
        });
        $routeProvider.when('/photos',
        {
            templateUrl:'app/components/photos/views/photosView.html',
            controller:'photosController'
        });
        $routeProvider.when('/photos/:orderId',
        {
            templateUrl:'app/components/photos/views/photosItemView.html',
            controller:'photosItemController'
        });
        $routeProvider.when('/news',
        {
            templateUrl:'app/components/news/views/newsView.html',
            controller:'newsController'
        });
        $routeProvider.when('/news/:itemId',
        {
            templateUrl:'app/components/news/views/newsItemView.html',
            controller:'newsItemController'
        });
        $routeProvider.when('/contacts',
        {
            templateUrl:'app/components/contacts/contactsView.html',
            controller:'contactsController'
        });
        $routeProvider.otherwise({redirectTo: '/main'});
    });
