'use strict';

(function(){

var RegisterController = function($scope, $location, $http, $timeout, CardsService) {
	$scope.registerData = {
        email: '',
        pwd: '',
        vemail: '',
        vpwd: ''
    };
    $scope.message = '';
    $scope.alertDisplayed = false;

     $scope.display = function() {
        $scope.alertDisplayed = true;
      $timeout(function() {
        $scope.alertDisplayed = false;
      }, 6000);
    };

	$scope.register = function(){

		if($scope.registerData.email !== $scope.registerData.vemail) {
			$scope.message = 'Emails do not match';
			$scope.display();
			$scope.registerData.email = '';
			$scope.registerData.vemail = '';
		}
		if($scope.registerData.pwd !== $scope.registerData.vpwd) {
			$scope.message = 'Passwords do not match';
			$scope.display();
			$scope.registerData.pwd = '';
			$scope.registerData.vpwd = '';
		}
		if($scope.message === ''){

			$http.get('http://iscorecards.com/service/CardGame.php?method=saveUser&email='+$scope.registerData.email+'&pwd='+$scope.registerData.pwd).then
			(
				function successCallback(result){

					if(!result.data.includes('Insert Error')){
						
						CardsService.saveUser(result.data);
						$location.path('/play');
					}else{
						$scope.message = 'User already exists!';
						$scope.display();
						$scope.registerData.email = '';
						$scope.registerData.vemail = '';
						$scope.registerData.pwd = '';
						$scope.registerData.vpwd = '';
					}
		    	
				},
				function errorCallback(error){
					console.log('ERROR: ' + error);
				}
			);
		}
	};
};



RegisterController.$inject = ['$scope', '$location', '$http', '$timeout', 'CardsService'];

angular.module('Cards')
	.controller('RegisterController', RegisterController);

}());