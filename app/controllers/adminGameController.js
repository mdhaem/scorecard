(function(){

var AdminGameController = function($scope, $location, $http, CardsFactory, CardsService) {
	$scope.handCount = [4,5,6,7,8,9,10,11,12];
	$scope.newGame = {
		cardGameName: '',
		hand: 8
	}

	$scope.selectedHand  = function(hand) {
    	$scope.newGame.hand = item;
  	}; 

	$scope.save = function() {
       var hash = CardsService.getUser();
       if(hash === ""){
       	hash = 'none';
       }
        $scope.response = CardsFactory.saveNewGame($scope.newGame.cardGameName, $scope.newGame.hand, hash).then(function(dataResponse){
            $scope.response = dataResponse.data;
            console.log('response: '+$scope.response);
        });
    };

};



AdminGameController.$inject = ['$scope', '$location', '$http', 'CardsFactory', 'CardsService'];

angular.module('Cards')
	.controller('AdminGameController', AdminGameController);

}());