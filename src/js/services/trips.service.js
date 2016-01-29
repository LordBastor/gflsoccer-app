gfl.services.factory('Trips', function() {

	var trips = [{
		path: 'trip/clinic/',
		name: 'ID Clinic Registration',
		icon: 'ion-medkit',
		flavour_text: 'Submit clinic information',
	},
	{
		path: 'trip/recommendation/',
		name: 'Player Recommentation Form',
		icon: 'ion-thumbsup',
		flavour_text: 'Recomment a player',
	},
	{
		path: 'trip/team/',
		name: 'Team Application Form',
		icon: 'ion-ios-people',
		flavour_text: 'Register your team',
	},
	{
		path: 'trip/passport/',
		name: 'Passport Form',
		icon: 'ion-document-text',
		flavour_text: 'Provide passport information',
	}];
	
	return { all: function(){ return trips; } };
});
