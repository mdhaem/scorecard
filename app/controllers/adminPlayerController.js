'use strict';

(function(){

	var AdminPlayerController = function($scope, $location, $http, $timeout, CardsFactory, CardsService) {
		$scope.cardPlayers = [];
	    $scope.groupName = '';
		$scope.gameName = CardsService.getSelectedCardGame().cardGameName;
		$scope.idCardGame = CardsService.getSelectedCardGame().idCardGame;
		$scope.hash = CardsService.getUser();
		$scope.button = 'Add Players';
		$scope.players = '';
		$scope.message = '';
		$scope.newGroupName = {idGroupName: 0, groupName: '', hash: '', idCardGame: 0};
		$scope.defaultSelectOption = 'Select group to delete...';
		$scope.instructions = 'Do something';
		$scope.selectButton = 'Delete Players';
		$scope.selectLabel = 'Players*';
		$scope.groupNames = [];

		 $scope.init = function init() {

			var hash = CardsService.getUser();

			//Get card teams associated with user
	        $scope.groupNames = CardsFactory.getGroupNames(hash).then(function(dataResponse){
	            $scope.groupNames = dataResponse.data;
	        });
	    };

    	$scope.init();

		$scope.display = function() {
        $scope.alertDisplayed = true;
	      $timeout(function() {
	        $scope.alertDisplayed = false;
	      }, 3000);
      	};
		
		$scope.save = function save(){
console.log('saving');
			var validPlayersList = $scope.spacesExist($scope.unregCardGame.players.groupName);
console.log($scope.unregCardGame.players.groupName);
			if(validPlayersList){

				$scope.response = CardsFactory.saveNewGroupName($scope.unregCardGame.players.groupName, $scope.idCardGame, $scope.hash).then(
					function successCallback(result){
console.log($scope.response);
console.log(result);
						if(result.data.error === undefined) {
							$scope.newGroupName.idGroupName = $scope.response;
							$scope.newGroupName.groupName = $scope.unregCardGame.players.groupName;
							$scope.newGroupName.hash = $scope.hash;
							$scope.newGroupName.idCardGame = $scope.idCardGame;

							CardsService.saveSelectedGroup($scope.newGroupName);
							console.log(CardsService.getSelectedGroup());
							$location.path('/card');
						}else{
							$scope.message = 'Invalid players list. Two or more players seperated by a space are required.';
							$scope.display();
						}
					});
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
	
	AdminPlayerController.$inject = ['$scope', '$location', '$http', '$timeout', 'CardsFactory', 'CardsService'];

angular.module('Cards')
	.controller('AdminPlayerController', AdminPlayerController);

}());