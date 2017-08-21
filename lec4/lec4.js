(function() {
'use strict'
	angular.module('angularExample', [])
		.controller('controllerExample', function($scope) {
			$scope.name = "John";
			$scope.sayHello = function() {
				return "Hello you!";
			}
		});


})();