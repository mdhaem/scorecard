'use strict';

describe('Testing RegisterController', function() {
    var httpBackend, controller, scope, cardsService, cardsFactory;

    beforeEach(module('Cards'));
        
    beforeEach(inject(function($httpBackend, $controller, $rootScope, CardsService, CardsFactory){
        httpBackend = $httpBackend;
        scope = $rootScope.$new();
        //controller = $controller('RegisterController', {$scope: scope});
        cardsService = CardsService;
        cardsFactory = CardsFactory;
        controller = $controller('RegisterController', {$scope: scope});
    }));

    afterEach(function(){
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    }); 

    describe('register', function() {
        it('sets registerData object', function() {
            expect(scope.registerData).toBeDefined();
            expect(scope.registerData.email).toEqual('');
            expect(scope.registerData.pwd).toEqual('');
            expect(scope.registerData.vemail).toEqual('');
            expect(scope.registerData.vpwd).toEqual('');
        });

        it('Should get a hash value for successful registration', function(){
            scope.registerData.email = 'sixth@gmail.com';
            scope.registerData.pwd = 'sixth';
            scope.registerData.vemail = 'sixth@gmail.com';
            scope.registerData.vpwd = 'sixth';
            scope.registerData.valid = true;

            console.log(scope.registerData.email);
            console.log(scope.registerData.pwd);
            
            // cardsFactory.saveUser(scope.registerData.email, scope.registerData.pwd).respond('68a05200c8a69b93994302c0f9ebe44d');


            httpBackend.expectGET('http://iscorecards.com/service/CardGame.php?method=saveUser&email='+scope.registerData.email+'&pwd='+scope.registerData.pwd).respond('68a05200c8a69b93994302c0f9ebe44d');

            // scope.register();
            // console.log(cardsService.getUser());
            httpBackend.flush();


            // expect(scope.loginData.email).toEqual('mdhaem@gmail.com');
            // expect(scope.loginData.pwd).toEqual('doscar');
            expect(cardsService.getUser()).toEqual('68a05200c8a69b93994302c0f9ebe44d');
        });
        
    });
});
