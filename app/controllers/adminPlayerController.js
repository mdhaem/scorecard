(function(){

	var AdminPlayerController = function($scope, $location, $http, CardsFactory, CardsService) {
		$scope.cardPlayers = [];
	    $scope.groupName = '';
		$scope.gameName = CardsService.getSelectedCardGame().cardGameName;
		$scope.button = 'Add Players';
		
		$scope.save = function save(){
			console.log('saving');
			var validPlayersList = $scope.spacesExist($scope.unregCardGame.players.groupName);

			if(validPlayersList){
				CardsService.saveSelectedCardGame($scope.unregCardGame.game);
				CardsService.saveSelectedGroup($scope.unregCardGame.players);
				$location.path('/card');
			}else{
				$scope.message = 'Invalid players list. Two or more players seperated by a space are required.';
				$scope.display();
				$scope.groupName = '';

			}
		};

		// $scope.init = function init() {
		//     $scope.cardPlayers = CardsFactory.getPlayers();
		//     console.log($scope.cardPlayers);	
		// };

		// $scope.init();

	};
	
	AdminPlayerController.$inject = ['$scope', '$location', '$http', 'CardsFactory', 'CardsService'];

angular.module('Cards')
	.controller('AdminPlayerController', AdminPlayerController);

}());