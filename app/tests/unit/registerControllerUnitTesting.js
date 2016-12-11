
describe('Testing RegisterController', function() {
        beforeEach(module('Cards'));
        
        var controller, scope, httpBackend;

        beforeEach(inject(function($controller, $rootScope, $httpBackend,  CardsService){
            scope = $rootScope.$new();
            controller = $controller('RegisterController', {$scope: scope});
            httpBackend = $httpBackend;
            cardsService = CardsService;
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
                scope.registerData.email = 'mdhaem@gmail.com';
                scope.registerData.pwd = 'doscar';

                httpBackend.expectGET('http://iscorecards.com/service/CardGame.php?method=saveUser&email='+scope.registerData.email+'&pwd='+scope.registerData.pwd).respond('68a05200c8a69b93994302c0f9ebe44d');

                scope.register();

                httpBackend.flush();


console.log('User: '+cardsService.getUser());

                // expect(scope.loginData.email).toEqual('mdhaem@gmail.com');
                // expect(scope.loginData.pwd).toEqual('doscar');
                expect(cardsService.getUser()).toEqual("68a05200c8a69b93994302c0f9ebe44d");
            });
        
        });
    });