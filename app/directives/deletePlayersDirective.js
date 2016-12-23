'use strict';

(function () {

    var directive = function () {
        return {
        	scope: {
                selectLabel: '@',
                defaultSelectOption: '@',
                instruction: '@'
            },
        	templateUrl: 'app/directives/deletePlayersDirective.html',
        	replace: true,
        	action: 'delete()'
        };
    };

    angular.module('Cards')
        .directive('deletePlayersDirective', directive);

}());