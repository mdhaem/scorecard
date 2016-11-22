
'use strict';

describe('Testing ScoreCard', function(){

    beforeEach(module('Cards'));

    describe('Testing ScoreCar PlayController', function(){
        
        var scope, ctrl, location, scp;

        beforeEach(inject(function($controller, $rootScope, $location){
            scope = $rootScope.$new();
            ctrl = $controller('PlayController', {$scope:scope});
            location = $location;
            spyOn(location, 'path');
        }));

        afterEach(function(){
            //cleanup code
        });

        it('GroupName & CardGame objects should exist, isDisabled should be true', function(){
             
             expect(scope.groupNames).toBeDefined();
             expect(scope.cardGames).toBeDefined();
             expect(scope.isDisabled).toBe(true);

        });

        it('groupNames & cardGames length should be 3', function(){
            scope.groupNames = [
                        {
                            idGroupName: "1",
                            groupName: "Bill Bev Mike Sandy"
                        },
                        {
                            idGroupName: "1",
                            groupName: "Bill Bev"
                        },
                        {
                            idGroupName: "1",
                            groupName: "Bill Bev Mike Sandy Curt"
                        }
                    ];  
            expect(scope.groupNames.length).toEqual(3);
            scope.cardGames = [
                        {
                            idCardGame: "1",
                            cardGameName: "Shanghi",
                            cardHand: "7"
                        },
                        {
                            idCardGame: "3",
                            cardGameName: "Hand and Foot",
                            cardHand: "8"
                        },
                        {
                            idCardGame: "50",
                            cardGameName: "Hearts",
                            cardHand: "8"
                        }
                    ];
            expect(scope.cardGames.length).toEqual(3);
            
        });

        it('should change location when cardGames length is 0', function() { 
            scope.cardGames = [];
            scope.init();

            expect(location.path).toHaveBeenCalledWith('/adminGame');
        });

        it('should change location when groupNames length is 0 and game has been selected', function() { 

            // cardsService.saveSelectedCardGame('Shanghi');

            // console.log('saveSelectedCardGame: ' + cardsService.getSelectedCardGame());

            // scope.groupNames = [];

        
            // scope.init();

            // expect(location.path).toHaveBeenCalledWith('/adminPlayer');
        });

        it('isDisabled should be false', function(){
            scope.selectedGame('Shanghi');
            expect(scope.isDisabled).toBe(false);
        });

        it('should change location to card', function(){
            scope.selectedGroup({
                            idGroupName: "1",
                            groupName: "Bill Bev Mike Sandy"
                        });
            expect(location.path).toHaveBeenCalledWith('/card');
        });

    });
});
