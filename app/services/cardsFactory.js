'use strict';

(function(){

var CardsFactory = function($http){
	var factory = {};
	var history = [{idPlayer: '1',won: '5'},{idPlayer: '2',won: '7'},{idPlayer: '3',won: '5'},{idPlayer: '4',won: '5'}];

	
	factory.getHistory = function() {
		return  $http.get('iscorecards.com/service/CardGame.php?method=getHistory'); //history; //
	};
	factory.getPlayers = function() {
		return  $http.get('http://iscorecards.com/service/CardGame.php?method=getPlayers&idCardGame=1&idGroupName=1'); //cardPlayers; //
	};
	factory.getCardGames = function(hash) {
		 return $http.get('http://iscorecards.com/service/CardGame.php?method=getCardGames&hash='+hash);
	};
	factory.saveNewGame = function(cardGameName, cardHand, hash){
		return $http.get('http://iscorecards.com/service/CardGame.php?method=saveNewGame&gameName='+cardGameName+'&hand='+cardHand+'&hash='+hash);
	};
	factory.getGroupNames = function(hash) {
		return  $http.get('http://iscorecards.com/service/CardGame.php?method=getGroupNames&hash='+hash);
	};

	//GROUPNAME
	factory.saveNewGroupName = function(groupName, idCardGame, hash){
		//saveNewGroupName($groupName, $idCardGame, $hash)
		return $http.get('http://iscorecards.com/service/CardGame.php?method=saveNewGroupName&groupName='+groupName+'&idCardGame='+idCardGame+'&hash='+hash);
	};
	factory.deleteGroupName = function(id){
		//saveNewGroupName($groupName, $idCardGame, $hash)
		return $http.get('http://iscorecards.com/service/CardGame.php?method=deleteGroupName&idGroupName='+id);
	};

	factory.getHistory = function() {
		return history;
	};
	factory.saveUser = function(email, pwd) {
		return $http.get('http://iscorecards.com/service/CardGame.php?method=saveUser&email='+email+'&pwd='+pwd);
	};
	factory.validateUser = function(email, pwd) {
		return $http.get('http://iscorecards.com/service/CardGame.php?method=validateUser&email='+email+'&pwd='+pwd);
	};

	return factory;
};

CardsFactory.$inject = ['$http'];

angular.module('Cards')
	.factory('CardsFactory', CardsFactory);
}());





