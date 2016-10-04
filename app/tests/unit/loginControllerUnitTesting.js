// 'use strict'

// describe('Testing LoginController', function(){

//     beforeEach(module('Cards'));

//     //describe('Testing LoginController', function(){
//         var scope, ctrl;

//         beforeEach(inject(function($controller, $rootScope){
//             scope = $rootScope.$new();
//             ctrl = $controller('LoginController', {$scope:scope});
//         }));

//         afterEach(function(){
//             //cleanup code
//         });

//         it('email & pwd objects should exist', function(){
//              // scope.email = "mikedhaem@gmail.com";
             
//              expect(scope.email).toBeDefined();
//              expect(scope.pwd).toBeDefined();

//         })
		

//     //});
// });
describe('LoginController', function() {
        beforeEach(module('Cards'));
        
        var controller, scope;

        beforeEach(inject(function($controller, $rootScope, $httpBackend){
            scope = $rootScope.$new();
            //console.log('scope1', scope);
            controller = $controller('LoginController', {$scope: scope});
            httpBackend = $httpBackend;
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
                scope.loginData.email = "mdhaem@gmail.com";
                scope.loginData.pwd = "doscar";

                httpBackend.when('GET',"http://iscorecards.com/service/CardGame.php?method=validateUser&email=mdhaem@gmail.com&pwd=doscar")
                    .respond({"data":[{"hash": "68a05200c8a69b93994302c0f9ebe44d"}]});

                scope.login();

                httpBackend.flush();
console.log(scope.response);
                // expect(scope.loginData.email).toEqual('mdhaem@gmail.com');
                // expect(scope.loginData.pwd).toEqual('doscar');
                expect(scope.response.data[0].hash).toEqual("68a05200c8a69b93994302c0f9ebe44d");
            });
        
        });
    });