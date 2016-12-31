'use strict';

(function () {

    var directive = function () {
        return {
        	scope: {
                datasource: '=',
                selectbutton: '@',
                instruction: '@',
                selectlabel: '@'
               
            },
        	templateUrl: 'app/directives/deletePlayersDirective.html',
        	replace: true
        	//action: 'delete()'
        };
    };


    angular.module('Cards')
        .directive('deletePlayersDirective', directive);

}());