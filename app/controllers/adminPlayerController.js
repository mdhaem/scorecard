(function(){

var AdminPlayerController = function($scope, $location, $http, CardsFactory, CardsService) {
	$scope.playerNames = [];
    $scope.groupName = [];
};



AdminPlayerController.$inject = ['$scope', '$location', '$http', 'CardsFactory', 'CardsService'];

angular.module('Cards')
	.controller('AdminPlayerController', AdminPlayerController);

}());