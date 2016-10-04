'use strict';

describe('Testing ScoreCard', function(){

    beforeEach(module('Cards'));

    describe('Testing ScoreCar playController', function(){
        var scope, ctrl;

        beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new();
            ctrl = $controller('PlayController', {$scope:scope});
        }));

        afterEach(function(){
            //cleanup code
        });
        
        it('GroupName and CardGame objects should exist', function(){
             
             expect(scope.groupNames).toBeDefined();
             expect(scope.groupNames.length).toBeGreaterThan(0);
             expect(scope.cardGames).toBeDefined();
             expect(scope.cardGames.length).toBeGreaterThan(0);
             expect(scope.isDisabled).toBe(true);

        });
        

    });
});
