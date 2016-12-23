'use strict';

(function(){

	var calcArray = function(value, zero){
	var list = [];
	for (var i = 0; i < value; i++) {
		if(zero){
			list.push(0);
		}else{
			list.push(i);
		}	
	}

	return list;
};

var ScoreCardController = function($scope, CardsService, CardsFactory) {
	$scope.rows = calcArray(parseInt(CardsService.getSelectedCardGame().cardHand, 10));
	$scope.gameName = CardsService.getSelectedCardGame().cardGameName;
	
	console.log(CardsService.getSelectedGroup());

	$scope.players = CardsService.getSelectedGroup().groupName.split(' ');
	$scope.total = calcArray($scope.players.length, true);
	$scope.history = CardsFactory.getHistory();
	$scope.showHistory = true;

	var hash = CardsService.getUser();
	if(hash === '') {
		$scope.showHistory = false;
	}
	
	$scope.onBlur = function(child, parent, score) {
		
        // console.log('index:' + parent + child);
        // console.log('score: '+score.currentTarget.value);

        this.total[child] += parseInt(score.currentTarget.value, 10) || 0;
    };

    $scope.addRow = function(){		
		$scope.rows.push(this.rows.length);
	};

	$scope.removeRow = function(){				
		$scope.rows.pop(this.rows.length);	
	};

};


ScoreCardController.$inject = ['$scope', 'CardsService', 'CardsFactory'];

angular.module('Cards')
	.controller('ScoreCardController', ScoreCardController);

}());