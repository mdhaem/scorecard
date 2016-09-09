(function(){

var CardsService = function(){

	var selectedGame = [];
	var selectedGroup = [];

	this.saveSelectedCardGame = function(game){
	    selectedGame = game;
	    console.log(selectedGame);
	};
	this.getSelectedCardGame = function(){
	    return selectedGame;
	};

	this.saveSelectedGroup = function(group){
	    selectedGroup = group;
	    console.log(selectedGroup);
	};
	this.getSelectedGroup = function(){
		console.log('Called getSelectedGroup; '+selectedGroup.groupName);
	    return selectedGroup;
	};

	
};

CardsService.$inject = [];

angular.module('Cards')
	.service('CardsService', CardsService)
}());