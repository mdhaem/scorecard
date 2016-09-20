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

	//$scope.scores = calcScoresArray(7, 4);
	//$scope.total = [0,0,0,0];
	//$scope.score = 0
	//$scope.scores = scores;
	// $scope.onBlur = function(child, parent, score) {
	// 	var row = parent;
	// 	var column = child;
		
 //        console.log('index:' + parent + child);
        
 //        console.log('score: '+score.currentTarget.value);
 //        this.total[child] += parseInt(score.currentTarget.value, 10) || 0;
 //    };

    function init() {
    	// var players = CardsFactory.getPlayers()
    	// $scope.players = getPlayerFirstNames(players);
    	$scope.groupNames = CardsFactory.getGroupNames();
		$scope.cardGames = CardsFactory.getCardGames();
    };

    init();

    // function saveSelectedGame(game){
    // 	console.log(game);
    // 	CardsService.saveSelectedGame($scope.selectedGame);
    // 	console.log('getSelectedGame:'+CardsService.getSelectedGame());
    // };
    // function saveSelectedGroup(){
    // 	CardsService.saveSelectedGroup($scope.selectedGroup);
    // };
};

// var getPlayerFirstNames = function(players){
// 	var playersFirstNames = [];
// 	var firstName = '';
// 	var total = [];
// 	for (var i = 0; i < players.length; i++) {
// 		firstName = players[i].playerName.split(" ")[0];
// 		playersFirstNames.push(players[i].playerName.split(" ")[0]);
		
// 		console.log(firstName);
// 	}
// 	return playersFirstNames;
// };

// var calcArray = function(value){
// 	var list = [];
// 	for (var i = 0; i < value; i++) {
// 		list.push(i);

// 	}

// 	return list;
// };

// var calcScoresArray = function(rows, players){
// 	var scores = [];
// 		for (var p = 0; p < players; p++) {
// 			scores.push({"score":0});
// 		}

// 	return scores;
// };


// var validateNumber = function(value){
//    return value % 5 == 0; 
// };

PlayController.$inject = ['$scope', '$location', 'CardsFactory', 'CardsService'];

angular.module('Cards')
	.controller('PlayController', PlayController);

}());