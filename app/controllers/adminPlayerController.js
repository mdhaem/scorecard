'use strict';

(function(){

	var AdminPlayerController = function($scope, $location, $http, CardsFactory, CardsService) {
		$scope.cardPlayers = [];
	    $scope.groupName = '';
		$scope.gameName = CardsService.getSelectedCardGame().cardGameName;
		$scope.idCardGame = CardsService.getSelectedCardGame().idCardGame;
		$scope.hash = CardsService.getUser();
		$scope.button = 'Add Players';
		
		$scope.save = function save(){
			console.log('saving');
			var validPlayersList = $scope.spacesExist($scope.unregCardGame.players.groupName);

			if(validPlayersList){

				$scope.response = CardsFactory.saveNewGame($scope.groupName, $scope.idCardGame, $scope.hash).then(function(dataResponse){
	            	$scope.response = dataResponse.data;
	            	console.log('response: '+$scope.response);
				});

				CardsService.saveSelectedGroup($scope.unregCardGame.players);
				$location.path('/card');
			}else{
				$scope.message = 'Invalid players list. Two or more players seperated by a space are required.';
				$scope.display();
				$scope.groupName = '';

			}

        };

		$scope.spacesExist = function(players){
		return players.split(' ').length-1;
	};

	};
	
	AdminPlayerController.$inject = ['$scope', '$location', '$http', 'CardsFactory', 'CardsService'];

angular.module('Cards')
	.controller('AdminPlayerController', AdminPlayerController);

}());