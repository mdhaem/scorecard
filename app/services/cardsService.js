(function(){

var CardsService = function(){

	var selectedGame = [];
	var selectedGroup = [];
	var userHash = {};

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

	this.saveUser = function(hash){
		//if(hash.data.length) {
	    	userHash = hash;
	    //}
	};
	this.getUser = function(){
		return userHash; //.data[0].hash;
	};
	
};

CardsService.$inject = ['$location'];

angular.module('Cards')
	.service('CardsService', CardsService)
}());