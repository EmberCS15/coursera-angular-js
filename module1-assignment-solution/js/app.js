(function(){
	'use strict';
	var module = angular.module("LunchCheck", []);
	module.controller("LunchCheckController", LunchCheckController);
	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope){
		$scope.lunch = "";
		$scope.lunchMessage = "";
		$scope.messageColor = "";
		$scope.textBoxBorder = "";
		const NO_ITEM = "Please enter data first", ENJOY = "Enjoy!", TOO_MUCH = "Too much!";
		const EMPTY = "empty", NOT_EMPTY = "not-empty";
		const EMPTY_BOX = "empty-textbox", NOT_EMPTY_BOX = "not-empty-textbox";
		$scope.displayLunchMessage = function(){
			$scope.lunchMessage = "";
			$scope.messageColor = "";
			var lunchString = $scope.lunch;
			var num = calculateNumberOfLunchItems(lunchString);
			if(num == 0 ){
				$scope.lunchMessage = NO_ITEM;
				$scope.messageColor = EMPTY;
				$scope.textBoxBorder = EMPTY_BOX;
			}
			else{
				if(num <= 3)
					$scope.lunchMessage = ENJOY;
				else $scope.lunchMessage = TOO_MUCH;
				$scope.messageColor = NOT_EMPTY;
				$scope.textBoxBorder = NOT_EMPTY_BOX;
			} 
		}
		function calculateNumberOfLunchItems(lunchString){
			var lunchItems = lunchString.split(',');
			if(!lunchItems) return 0;
			var totalItems = 0;
			for(let i in lunchItems){
				lunchItems[i] = lunchItems[i].trim();
				if(lunchItems[i].length == 0)
					continue;
				totalItems++;
			}
			return totalItems;
		}
	}
})();