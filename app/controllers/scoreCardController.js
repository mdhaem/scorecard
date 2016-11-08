(function(){

var ScoreCardController = function($scope, CardsService) {
	$scope.rows = calcArray(parseInt(CardsService.getSelectedCardGame().cardHand, 10));
	$scope.gameName = CardsService.getSelectedCardGame().cardGameName;
	//$scope.selectedGroup = CardsService.getSelectedGroup();
	$scope.players = CardsService.getSelectedGroup().groupName.split(" ");
	$scope.total = calcArray($scope.players.length, true);
	
	$scope.onBlur = function(child, parent, score) {
		var row = parent;
		var column = child;
		
        console.log('index:' + parent + child);
        console.log('score: '+score.currentTarget.value);

        this.total[child] += parseInt(score.currentTarget.value, 10) || 0;
    };

    $scope.addRow = function(){		
		$scope.rows.push(this.rows.length);
	};

	$scope.removeRow = function(name){				
		$scope.rows.pop(this.rows.length);	
	};

};

var namesArray = function(names){
 	return names.split(" ");
};

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

// var validateNumber = function(value){
//    return value % 5 == 0; 
// };

ScoreCardController.$inject = ['$scope', 'CardsService'];

angular.module('Cards')
	.controller('ScoreCardController', ScoreCardController);

}());