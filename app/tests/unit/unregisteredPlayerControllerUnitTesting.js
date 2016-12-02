'use strict';

describe('Testing ScoreCard', function(){

    beforeEach(module('Cards'));

    describe('Testing UnregisteredPlayerController', function(){
        
        var scope, ctrl;

        beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new();
            ctrl = $controller('UnregisteredPlayerController', {$scope:scope});
        }));

        afterEach(function(){
            //cleanup code
        });

        it('unregCardGame should exist', function(){
            expect(scope.unregCardGame).toBeDefined();
            expect(scope.unregCardGame.game).toBeDefined();
            expect(scope.unregCardGame.game.idCardGame).toBeDefined();
            expect(scope.unregCardGame.game.cardGameName).toBeDefined();
            expect(scope.unregCardGame.game.cardHand).toBeDefined();
            expect(scope.unregCardGame.players).toBeDefined();
            expect(scope.unregCardGame.players.idGroupName).toBeDefined();
            expect(scope.unregCardGame.players.groupName).toBeDefined();
        });

        it('message should exist', function(){
            expect(scope.message).toBeDefined();
        });

        it('save method should exist', function(){  
             expect(scope.save).toBeDefined();
        });

        // it('players list contains spaces', function(){
        //     scope.unregCardGame.players = 'Bill Bev Mike Sandy';
        //     expect(scope.unregCardGame.players.match(/\s/g).length).toEqual(3);
        // });

        it('verify groupName contains at least on space seperating names', function(){
            expect(scope.spacesExist('Mike jSandy')).toBe(1);
            // expect(myctrl.add('abcd',2)).toBe('invalid args'); // wrong arg type
        });

        

    });
});