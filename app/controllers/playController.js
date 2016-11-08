(function(){

	var PlayController = function($scope, $location, CardsFactory, CardsService) {
	$scope.groupNames = [];
	$scope.cardGames = [];
	$scope.isDisabled = true;

	$scope.selectedGame  = function(game) {
    	CardsService.saveSelectedCardGame(game);
    	$scope.isDisabled = false;
  	}; 

	$scope.selectedGroup = function(group) {
    	CardsService.saveSelectedGroup(group);
    	$location.path('/card');
  	}; 

    $scope.init = function init() {
    	$scope.groupNames = CardsFactory.getGroupNames();
		$scope.cardGames = CardsFactory.getCardGames();
        if($scope.cardGames.length === 0){
            $location.path('/adminPlayer');
        }
    };

    $scope.init();
};


PlayController.$inject = ['$scope', '$location', 'CardsFactory', 'CardsService'];

angular.module('Cards')
	.controller('PlayController', PlayController);

}());