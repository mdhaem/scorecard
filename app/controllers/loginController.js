'use strict';

(function(){

var LoginController = function($scope, $location, $http, $timeout, CardsService, CardsFactory) {
	// $scope.email;
	// $scope.pwd;
	$scope.loginData = {
        email: '',
        pwd: ''
    };
    $scope.message = '';
    $scope.alertDisplayed = false;

     $scope.display = function() {
        $scope.alertDisplayed = true;
      $timeout(function() {
        $scope.alertDisplayed = false;
      }, 3000);
    };

	$scope.login = function(){

		CardsFactory.validateUser($scope.loginData.email, $scope.loginData.pwd)
		.then(
			function successCallback(result){

				if(result.data.error === undefined) {//.data.length){
					CardsService.saveUser(result.data); //.data[0].hash);
					//console.log(CardsService.getUser());
					$location.path('/play');
				}else{
					
					$scope.message = 'Invalid email or password.';
					//$scope.showMessage = true;
					$scope.display();
				}
	    	
			},
			function errorCallback(error){
				console.log(error);
			}
		);
	};
};


LoginController.$inject = ['$scope', '$location', '$http', '$timeout', 'CardsService', 'CardsFactory'];

angular.module('Cards')
	.controller('LoginController', LoginController);

}());