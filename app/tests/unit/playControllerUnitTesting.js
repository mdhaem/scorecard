
'use strict';

describe('Testing ScoreCard', function(){
    describe('Testing ScoreCar playController', function(){
        
        it('GroupName & CardGame objects should exist, isDisabled should be true, and the length of GroupName & CardGame should be greater then 0', function(){
             
             beforeEach(module('Cards'));

             var scope = {};
             var ctrl;

             inject(function($controller){
                ctrl = $controller('PlayController', {$scope:scope});
             });

             expect(scope.groupNames).toBeDefined();
             expect(scope.groupNames.length).toBeGreaterThan(0);
             expect(scope.cardGames).toBeDefined();
             expect(scope.cardGames.length).toBeGreaterThan(0);
             expect(scope.isDisabled).toBe(true);

        })

    });
});
