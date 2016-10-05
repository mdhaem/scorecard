(function(){

var RegisterController = function($scope, $location, $http, CardsFactory, CardsService) {
	$scope.registerData = {
        email: '',
        pwd: '',
        vemail: '',
        vpwd: ''
    };


	$scope.register = function(){
		
		$http.get("http://iscorecards.com/service/CardGame.php?method=saveUser&email="+$scope.registerData.email+"&pwd="+$scope.registerData.pwd)
		.then(
			function successCallback(result){

				if(!result.data.includes("Insert Error")){
					
					// console.log('Register: '+ result.data);
					// console.log($scope.registerData);
					CardsService.saveUser(result.data);

					// console.log('getUser: ' + CardsService.getUser());

					$location.path('/play');
				}
	    	
			},
			function errorCallback(error){
				console.log(error);
			}
		);
	};
};



RegisterController.$inject = ['$scope', '$location', '$http', 'CardsFactory', 'CardsService'];

angular.module('Cards')
	.controller('RegisterController', RegisterController);

}());