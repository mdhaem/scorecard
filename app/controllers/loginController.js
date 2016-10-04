(function(){

var LoginController = function($scope, $location, $http, CardsFactory, CardsService) {
	// $scope.email;
	// $scope.pwd;
	$scope.loginData = {
        email: '',
        pwd: ''
    };

	$scope.login = function(){
		
		$http.get("http://iscorecards.com/service/CardGame.php?method=validateUser&email="+$scope.loginData.email+"&pwd="+$scope.loginData.pwd)
		.then(
			function successCallback(result){

				if(result.data.length){
					CardsService.saveUser(result);
					$location.path('/play');
				}
	    	
			},
			function errorCallback(error){
				console.log(error);
			}
		);
	};
};



LoginController.$inject = ['$scope', '$location', '$http', 'CardsFactory', 'CardsService'];

angular.module('Cards')
	.controller('LoginController', LoginController);

}());