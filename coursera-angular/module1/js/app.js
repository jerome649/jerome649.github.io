(function (){

angular.module("LunchCheck", []).controller("LunchCheckController", LunchCheckController);

function LunchCheckController($scope) {

	$scope.lunch = ""
	$scope.lunchMessage = ""
	
	$scope.check = function() {
		var message = computeMessage($scope.lunch);
		$scope.lunchMessage = message;
	};
	
	function computeMessage(string) {
		if (string.length == 0) {
		  return "Please enter data first";
		} else {
			var splits = string.split(",")
			
			if (splits.length <= 3) {
				return "Enjoy!";
			} else {
				return "Too much!";
			}
		} 
	}


}

})();