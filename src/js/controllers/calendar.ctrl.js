starter.controllers.controller('CalendarCtrl', function($scope, $stateParams, Calendar)
{
	$scope.page_title = 'Event Calendar';
	Calendar.get(function(data){ $scope.events = data.items; });
	
	$scope.open_map = function(location)
	{
		var url='';
		
		if(ionic.Platform.isIOS()){ url="http://maps.apple.com/maps?q="+encodeURIComponent(location); }
		else{ url="http://maps.google.com?q="+encodeURIComponent(location); }
		
		window.open(url, '_system', 'location=no');
	};
});