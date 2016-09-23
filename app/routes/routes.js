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
			.otherwise({ redirectTo: '/login'});
	});

}());