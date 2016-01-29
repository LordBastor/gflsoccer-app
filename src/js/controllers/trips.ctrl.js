starter.controllers.controller('TripsCtrl', function($scope, $stateParams, Trips)
{
	$scope.page_title = 'Germany Trip Registration';
	$scope.trips = Trips.all();
});