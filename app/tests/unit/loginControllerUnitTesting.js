'use strict';

describe('LoginController', function() {
        beforeEach(module('Cards'));
        
        var controller, scope, httpBackend, cardsService;

        beforeEach(inject(function($controller, $rootScope, $httpBackend, CardsService){
            scope = $rootScope.$new();
            controller = $controller('LoginController', {$scope: scope});
            httpBackend = $httpBackend;
            cardsService = CardsService;
        }));

        afterEach(function(){
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        }); 

        describe('login', function() {
            it('sets variables email & pwd objects', function() {
                expect(scope).toBeDefined();
                expect(scope.loginData).toBeDefined();
                expect(scope.loginData.email).toEqual('');
                expect(scope.loginData.pwd).toEqual('');
            });

            it('Should get a hash value for successful login', function(){
                scope.loginData.email = 'mdhaem@gmail.com';
                scope.loginData.pwd = 'doscar';

                httpBackend.expectGET('http://iscorecards.com/service/CardGame.php?method=validateUser&email='+scope.loginData.email+'&pwd='+scope.loginData.pwd)
                    .respond('68a05200c8a69b93994302c0f9ebe44d');

                scope.login();

                httpBackend.flush();

                expect(scope.loginData.email).toEqual('mdhaem@gmail.com');
                expect(scope.loginData.pwd).toEqual('doscar');
                expect(cardsService.getUser()).toEqual('68a05200c8a69b93994302c0f9ebe44d');
            });
        
        });
    });