'use strict';

describe('Testing ScoreCard', function(){

    beforeEach(module('Cards'));

    describe('Testing AdminPlayerController', function(){
        
        var scope, ctrl;

        beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new();
            ctrl = $controller('AdminPlayerController', {$scope:scope});
        }));

        afterEach(function(){
            //cleanup code
        });

        it('playerNames & groupName should exist', function(){
             
             expect(scope.cardPlayers).toBeDefined();
             expect(scope.groupName).toBeDefined();

        });

    });
});
