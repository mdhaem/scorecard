(function(){

	var PlayController = function($scope, $location, CardsFactory, CardsService) {
	// $scope.rows = calcArray(7);
	// $scope.players = [];
	$scope.groupNames = [];
	$scope.cardGames = [];
	$scope.isDisabled = true;

	$scope.selectedGame  = function(game) {
    	
    	console.log(game);
    	CardsService.saveSelectedCardGame(game);
    	$scope.isDisabled = false;

  	}; 

	$scope.selectedGroup = function(group) {
    	
    	console.log(group);
    	CardsService.saveSelectedGroup(group);
    	$location.path('/card');

  	}; 

    function init() {
    	// var players = CardsFactory.getPlayers()
    	// $scope.players = getPlayerFirstNames(players);
    	$scope.groupNames = CardsFactory.getGroupNames();
		$scope.cardGames = CardsFactory.getCardGames();
    };

    init();
};


PlayController.$inject = ['$scope', '$location', 'CardsFactory', 'CardsService'];

angular.module('Cards')
	.controller('PlayController', PlayController);

}());