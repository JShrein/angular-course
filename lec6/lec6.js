(function() {
'use strict'
	angular.module("nameCalculator", [])
		.controller("nameController", function($scope) {
			$scope.name = "";
			$scope.totalValue = 0;
			$scope.displayNumeric = function() {
				var value = calculateNameValue($scope.name);
				$scope.totalValue = value;
			};

			function calculateNameValue(string) {
				var stringValue = 0;
				for(var i = 0; i < string.length; i++) {
					stringValue += string.charCodeAt(i);
				}
				return stringValue;
			}
		});
})();