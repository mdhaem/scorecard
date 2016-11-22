(function(){

var UnregisteredPlayerController = function($scope, $location, $timeout, CardsService) {
	
	$scope.unregCardGame = {
		game: {idCardGame: 1, cardGameName: '', cardHand:7},
		players: {idGroupName: 1, groupName: ''}
	};

	$scope.display = function() {
        $scope.alertDisplayed = true;
	      $timeout(function() {
	        $scope.alertDisplayed = false;
	      }, 3000)
      };

	$scope.message = '';

	$scope.save = function(){

		var validPlayersList = $scope.spacesExist($scope.unregCardGame.players.groupName);

		if(validPlayersList){
			CardsService.saveSelectedCardGame($scope.unregCardGame.game);
			CardsService.saveSelectedGroup($scope.unregCardGame.players);
			$location.path('/card');
		}else{
			$scope.message = 'Invalid players list. Two or more players seperated by a space are required.';
			$scope.display();
			$scope.unregCardGame.players.groupName = '';

		}
	};

	$scope.spacesExist = function(players){
		return players.split(" ").length-1
	};
};




UnregisteredPlayerController.$inject = ['$scope', '$location', '$timeout', 'CardsService'];

angular.module('Cards')
	.controller('UnregisteredPlayerController', UnregisteredPlayerController);

}());