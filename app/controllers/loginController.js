(function(){

var LoginController = function($scope, $location, CardsFactory, CardsService) {
	
};



LoginController.$inject = ['$scope', '$location', 'CardsFactory', 'CardsService'];

angular.module('Cards')
	.controller('LoginController', LoginController);

}());

// (function () {
//     'use strict';
 
//     angular
//         .module('app')
//         .controller('LoginController', LoginController);
 
//     LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
//     function LoginController($location, AuthenticationService, FlashService) {
//         var vm = this;
 
//         vm.login = login;
 
//         (function initController() {
//             // reset login status
//             AuthenticationService.ClearCredentials();
//         })();
 
//         function login() {
//             vm.dataLoading = true;
//             AuthenticationService.Login(vm.username, vm.password, function (response) {
//                 if (response.success) {
//                     AuthenticationService.SetCredentials(vm.username, vm.password);
//                     $location.path('/');
//                 } else {
//                     FlashService.Error(response.message);
//                     vm.dataLoading = false;
//                 }
//             });
//         };
//     }
 
// })();