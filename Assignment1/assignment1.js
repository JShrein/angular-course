(function() {
	'use strict';
	var CHK_MSG_PASS = "Enjoy!";
	var CHK_MSG_FAIL = "Too Much!";
	var CHK_MSG_EMPTY = "Please enter the list!";

	angular.module("Assignment1App", [])
		.controller("Assignment1Controller", Assignment1Controller);

	Assignment1Controller.$inject = ['$scope'];
	function Assignment1Controller($scope) {
		$scope.input_list = "";
		$scope.message = "";

		$scope.checkItems = function() {
			console.log("test");
			if($scope.input_list.length == 0) {
				$scope.message = CHK_MSG_EMPTY;
			}
			else {
				var items = $scope.input_list.split(',');
				if(items.length > 3) {
					$scope.message = CHK_MSG_FAIL;
				}
				else {
					$scope.message = CHK_MSG_PASS;
				}
			}
		}
	};

})();