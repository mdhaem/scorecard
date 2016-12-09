'use strict';

(function(){

var CardsService = function(){

	var selectedGame = [];
	var selectedGroup = [];
	var userHash = '';

	this.saveSelectedCardGame = function(game){
	    selectedGame = game;
	};
	this.getSelectedCardGame = function(){
	    return selectedGame;
	};

	this.saveSelectedGroup = function(group){
	    selectedGroup = group;
	    console.log(selectedGroup);
	};
	this.getSelectedGroup = function(){
	    return selectedGroup;
	};

	this.saveUser = function(hash){
	    userHash = hash;
	};
	this.getUser = function(){
		return userHash;
	};
	
};

angular.module('Cards')
	.service('CardsService', CardsService);
}());