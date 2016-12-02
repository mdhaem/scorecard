(function () {

    var directive = function () {
        return {
        	templateUrl: 'app/directives/addPlayersDirective.html',
        	replace: true,
        	action: 'save()'
        };
    };

    angular.module('Cards')
        .directive('addPlayersDirective', directive);

}());