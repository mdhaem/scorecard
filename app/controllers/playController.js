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
        //Get card games associated with user
        var hash = CardsService.getUser();

        if(hash === ""){
            $location.path('/adminGame');
        }

        $scope.cardGames = CardsFactory.getCardGames(hash).then(function(dataResponse){
            $scope.cardGames = dataResponse.data;
        });

        //Get card teams associated with user
        $scope.groupNames = CardsFactory.getGroupNames(hash).then(function(dataResponse){
            $scope.groupNames = dataResponse.data;
        });

        if($scope.groupNames.length === 0 && CardsService.getSelectedCardGame() == 1){
            $location.path('/adminPlayer');
        }
    };

    $scope.init();
};


PlayController.$inject = ['$scope', '$location', 'CardsFactory', 'CardsService'];

angular.module('Cards')
	.controller('PlayController', PlayController);

}());