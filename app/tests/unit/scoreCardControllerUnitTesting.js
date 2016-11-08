//'use strict';

describe('Testing ScoreCardController', function(){

    beforeEach(module('Cards'));

        describe('Testing ScoreCardController', function(){
            var rootScope, ctrl;

            beforeEach(function(){
                module(function($provide){

                    var MockCardsService = {

                        getSelectedGroup: function(){
                            return {
                                        idGroupName: "1",
                                        groupName: "Bill Bev Mike Sandy"
                                    };
                        },
                        getSelectedCardGame: function(){
                            return {
                                        idCardGame: "1",
                                        cardGameName: "Shanghi",
                                        cardHand: "7"
                                    };
                        },
                        getUser: function(){
                            return "68a05200c8a69b93994302c0f9ebe44d";
                        }

                    };

                    $provide.value('CardsService', MockCardsService);
                });
                
            });

            beforeEach(inject(function($controller, $rootScope){
                scope = $rootScope.$new();
                ctrl = $controller('ScoreCardController', {$scope:scope});
            }));

            afterEach(function(){
                //cleanup code
            });

            it('GroupName and CardGame objects should exist', function(){
                 
                 expect(scope.rows).toBeDefined();
                 expect(scope.rows.length).toBe(7);
                 expect(scope.gameName).toBeDefined();
                 expect(scope.gameName).toBe('Shanghi');
                 expect(scope.players).toBeDefined();
                 expect(scope.players).toEqual(['Bill','Bev','Mike','Sandy']);
                 expect(scope.total).toEqual([0,0,0,0]);

            });     

    });

});
