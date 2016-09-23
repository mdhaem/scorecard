

// describe('Controller: LoginController', function() {
//   var LoginCtrl, $httpBackend, $rootScope, $provide, $location, $cookies, scope;
//   beforeEach(module('Cards'));

//   beforeEach(inject(function($injector) {
//     $httpBackend=$injector.get('$httpBackend');
//     $rootScope=$injector.get('$rootScope');
//     $cookieStore=$injector.get('$cookies');
//     $controller=$injector.get('$controller');
//     $location=$injector.get('$location');


//     LoginCtrl=function() {
//       return $controller('LoginController', { 
//         '$scope': $rootScope,
//         '$cookie': $cookies,
//         '$location': $location
//       });
//     };
//   }));

//   //This is success
//   it('should have a LoginCtrl controller', function() {
//     expect('LoginController').toBeDefined();
//   });

//   // You have to think about what you want to test here. There is no logic in your controller
//   // that matches what you test here. To activate test just remove the x from xit.
//   xit('should store username and password into cookies', function() {
//     var $scope={};
//     var loginCtrl=LoginCtrl();
//     $rootScope.username='testUser';
//     expect($cookies.get('username')).toBe('testUser');
//   });

//   // Failure
//   it('should logs a user in and redirect', function() {
//     var loginCtrl=LoginCtrl();
    
//     $httpBackend.whenPOST('/login').respond(200);
//     $rootScope.username = 'testUser';
//     $rootScope.password = 'password';
//     $rootScope.login();
    
//     $httpBackend.flush();
//     $rootScope.$digest();
//     expect($location.path()).toBe('/'); // --> error: location is not defined
//     expect($cookies.get('username')).toBe('testUser');
//   });
// });
 
'use strict'

describe('Testing ScoreCard', function(){
    describe('Testing ScoreCar loginController', function(){
        
        it('userName & password objects should exist', function(){
             
             beforeEach(module('Cards'));

             var scope = {};
             var ctrl;

             inject(function($controller){
                ctrl = $controller('LoginController', {$scope:scope});
             });

             expect(scope.loginName).toBeDefined();
             expect(scope.password.length).toBeGreaterThan(0);
             expect(scope.password).toBeDefined();

        })
		
    });
});