gfl.controllers.controller('CalendarCtrl', function($scope, $stateParams, $cordovaCalendar, Calendar)
{
	$scope.page_title = 'Event Calendar';
	$scope.events = Calendar.get(function(data){});
	$scope.events.$promise.then(function(data)
	{
		$scope.events = data.items;
	});
	// Calendar.get(function(data){ $scope.events = data.items; });
	
	$scope.open_map = function(location)
	{
		var url='';
		
		if(ionic.Platform.isIOS()){ url='http://maps.apple.com/maps?q='+encodeURIComponent(location); }
		else{ url='geo://0,0?q='+encodeURIComponent(location); }
		
		window.open(url, '_system', 'location=no');
		return false;
	};
	
	$scope.add_event = function(gfl_event)
	{
		$cordovaCalendar.createEventInteractively({
			title: gfl_event.summary,
			location: gfl_event.location,
			notes: gfl_event.summary,
			// Check for dateTime or date
			startDate: gfl_event.start.date,
			endDate: gfl_event.end.date
		}).then(function(result){
			// kurami
		}, function(err){
			// kurami
		});
	};
});