starter.services.factory('Camps', function() {

	var camps = [{
		path: 'camp/register/',
		name: 'Camp Registration',
		icon: 'ion-ios-football',
		flavour_text: 'Soccer Camp Registration',
	},
	{
		path: 'camps/beach/',
		name: 'Beach Soccer',
		icon: 'ion-ios-football',
		flavour_text: 'Beach Soccer Camp Registration',
	},
	{
		path: 'camps/waiver/',
		name: 'Camp Waiver',
		icon: 'ion-medkit',
		flavour_text: 'GFL Soccer Camp Waiver',
	}];
	
	return { all: function(){ return camps; } };
});
