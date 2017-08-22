(function() {
'use strict';
	angular.module('MsgApp', [])
		.controller('MsgController', MsgController);

	MsgController.$inject = ['$scope'];
	function MsgController($scope) {
		$scope.name = "John";
		$scope.state = "cool";

		$scope.sayMessage = function() {
			return "I have watch the eclipse tomorrow";
		};

		$scope.giveMoney = function() {
			console.log($scope.state);
			if($scope.state == "cool") {
				$scope.state = "rich";
			}
			else {
				$scope.state = "cool";
			}
		};
	};
})();