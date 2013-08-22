function getEvents($scope){
	$scope.events = [
	                 {"name": "Practice",
	                  "date": new Date(2013, 7, 22)},
	                 {"name": "Bout",
	                  "date": new Date(2013, 7, 24)},
	                 {"name": "Bout",
	                  "date": new Date(2013, 8, 7)}
	               ];
	$scope.month = new Date().getMonth()
	
	$scope.filterByMonth = function(item) {
		  return item.date.getMonth() == $scope.month;
		};
		
	$scope.daysInMonth = function(){
		console.log("Hi!");
		return new Date(2013, $scope.month, 0)
	};
}