gfl.controllers.controller('CampsCtrl', function($scope, $stateParams, Camps)
{
	$scope.page_title = 'Camp Registration';
	$scope.camps = Camps.all();
});