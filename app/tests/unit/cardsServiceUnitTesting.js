'use strict';

describe('Testing ScoreCard', function(){
    describe('Testing ScoreCar playController', function(){
        
        it('GroupName and CardGame objects should exist', function(){
             
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
