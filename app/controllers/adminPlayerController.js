(function(){

	var AdminPlayerController = function($scope, $location, $http, CardsFactory, CardsService) {
		$scope.cardPlayers = [];
	    $scope.groupName = [];
	

	$scope.init = function init() {
	    $scope.cardPlayers = CardsFactory.getPlayers();
	    console.log($scope.cardPlayers);
			
	};

	$scope.init();

	};
	
	AdminPlayerController.$inject = ['$scope', '$location', '$http', 'CardsFactory', 'CardsService'];

angular.module('Cards')
	.controller('AdminPlayerController', AdminPlayerController);

}());