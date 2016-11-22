'use strict';

describe('Testing ScoreCard', function(){

    beforeEach(module('Cards'));

    describe('Testing AdminGameController', function(){
        
        var scope, ctrl;

        beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new();
            ctrl = $controller('AdminGameController', {$scope:scope});
        }));

        afterEach(function(){
            //cleanup code
        });

        it('save should exist', function(){
             
             expect(scope.save).toBeDefined();

        })

    });
});
