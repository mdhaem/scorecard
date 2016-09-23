(function(){

var CardsFactory = function($http){
	var factory = {};
	var cardGames = [
						{
							idCardGame: "1",
							cardGameName: "Shanghi",
							cardHand: "7"
						},
						{
							idCardGame: "3",
							cardGameName: "Hand and Foot",
							cardHand: "8"
						},
						{
							idCardGame: "50",
							cardGameName: "Hearts",
							cardHand: "8"
						}
					];
	var cardPlayers = [
						{
							idPlayer: "1",
							playerName: "Bill York"
						},
						{
							idPlayer: "2",
							playerName: "Bev York"
						},
						{
							idPlayer: "3",
							playerName: "Mike DHaem"
						},
						{
							idPlayer: "4",
							playerName: "Sandy DHaem"
						}
					];
	var groupNames = [
						{
							idGroupName: "1",
							groupName: "Bill Bev Mike Sandy"
						},
						{
							idGroupName: "1",
							groupName: "Bill Bev"
						},
						{
							idGroupName: "1",
							groupName: "Bill Bev Mike Sandy Curt"
						}
					];	
	var history = [
					{
						idPlayer: "1",
						won: "5"
					},
					{
						idPlayer: "2",
						won: "7"
					},
					{
						idPlayer: "3",
						won: "5"
					},
					{
						idPlayer: "4",
						won: "5"
					}
				]

	factory.getHistory = function() {
		return  history; http; //$http.get('iscorecards.com/service/CardGame.php?method=getHistory');
	};
	factory.getPlayers = function() {
		return  cardPlayers; //$http.get('http://iscorecards.com/service/CardGame.php?method=getPlayers&idCardGame=1&idGroupName=1');
	};
	factory.getCardGames = function() {
		return  cardGames; //$http.get('http://iscorecards.com/service/CardGame.php?method=getCardGames');
	};
	factory.getCardGame = function(idCardGame) {
		for(var i=0, len=cardGame.length; i < len; i++) {
			if(cardGame[i].idCardGame === idCardGame) {
				return cardGame[i];
			}
		}
		return  {};
	};
	factory.getGroupNames = function() {
		return  groupNames; //$http.get('http://iscorecards.com/service/CardGame.php?method=getGroupNames');
	};
	
	return factory;
};

CardsFactory.$inject = ['$http'];

angular.module('Cards')
	.factory('CardsFactory', CardsFactory)
}());