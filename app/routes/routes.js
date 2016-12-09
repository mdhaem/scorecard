'use strict';

(function(){

angular.module('Cards')
	.config(function($routeProvider){
		$routeProvider
			.when('/about',
			{
				controller: 'AboutController',
				templateUrl: 'app/views/aboutView.html'
			})
			.when('/register',
			{
				controller: 'RegisterController',
				templateUrl: 'app/views/registerView.html'
			})
			.when('/login',{
				controller: 'LoginController',
				templateUrl: 'app/views/loginView.html'
			})
			.when('/play',{
				controller: 'PlayController',
				templateUrl: 'app/views/playView.html'
			})
			.when('/card',{
				controller: 'ScoreCardController',
				templateUrl: 'app/views/scoreCardView.html'
			})
			.when('/adminPlayer',{
				controller: 'AdminPlayerController',
				templateUrl: 'app/views/adminPlayerView.html'
			})
			.when('/adminGame',{
				controller: 'AdminGameController',
				templateUrl: 'app/views/adminGameView.html'
			})
			.when('/unregistered',{
				controller: 'UnregisteredPlayerController',
				templateUrl: 'app/views/unregisteredPlayerView.html'
			})
			.otherwise({ redirectTo: '/login'});
	});

}());