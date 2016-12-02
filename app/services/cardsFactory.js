(function(){

var CardsFactory = function($http, CardsService, $rootScope, $q){
	var factory = {};
	var cardGames = []; //[{"idCardGame":"1","cardGameName":"Shanghi","cardHand":"7"},{"idCardGame":"3","cardGameName":"Hand and Foot","cardHand":"8"},{"idCardGame":"50","cardGameName":"Hearts","cardHand":"8"},{"idCardGame":"51","cardGameName":"0test","cardHand":"8"}];
	var cardPlayers = [];
	var groupNames = [{idGroupName: "1",groupName: "Bill Bev Mike Sandy"},{idGroupName: "1",groupName: "Bill Bev"},{idGroupName: "1",groupName: "Bill Bev Mike Sandy Curt"}];	
	var history = [{idPlayer: "1",won: "5"},{idPlayer: "2",won: "7"},{idPlayer: "3",won: "5"},{idPlayer: "4",won: "5"}];

	
	factory.getHistory = function() {
		return  $http.get('iscorecards.com/service/CardGame.php?method=getHistory'); //history; //
	};
	factory.getPlayers = function() {
		return  $http.get('http://iscorecards.com/service/CardGame.php?method=getPlayers&idCardGame=1&idGroupName=1'); //cardPlayers; //
	};
	factory.getCardGames = function(hash) {
		 return $http.get("http://iscorecards.com/service/CardGame.php?method=getCardGames&hash="+hash);
	};
	factory.saveNewGame = function(cardGameName, cardHand, hash){
		return $http.get("http://iscorecards.com/service/CardGame.php?method=saveNewGame&gameName="+cardGameName+"&hand="+cardHand+"&hash="+hash);
	};
	factory.getGroupNames = function(hash) {
		return  $http.get("http://iscorecards.com/service/CardGame.php?method=getGroupNames&hash="+hash);
	};

	
	return factory;
};

var getData = function(url, http, q){
	
	var defer = q.defer();

	http.get(url).then(function (response){
		defer.resolve(response.data);
	},function (response){
		defer.reject(response)
	});

	return defer.promise;
};

CardsFactory.$inject = ['$http', 'CardsService', '$rootScope', '$q'];

angular.module('Cards')
	.factory('CardsFactory', CardsFactory)
}());





