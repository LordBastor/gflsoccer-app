gfl.services.factory('Calendar', function($resource)
{
	/*
	 Internet Timestamp Generator
	 Copyright (c) 2009 Sebastiaan Deckers
	 License: GNU General Public License version 3 or later
	*/
	var Timestamp = {
		start: function (date){
			date = date ? date : new Date();
			var offset = date.getTimezoneOffset();
			return this.pad(date.getFullYear(), 4)
			+ "-" + this.pad(date.getMonth() + 1, 2)
			+ "-" + this.pad(date.getDate(), 2)
			+ "T" + this.pad(date.getHours(), 2)
			+ ":" + this.pad(date.getMinutes(), 2)
			// Angular $resource WTF??!?!?!?! O_o
			+ ":" + this.pad(date.getSeconds(), 2)
			+ "Z"
			+ ":" + this.pad(date.getSeconds(), 2)
			+ "Z";
			// + (offset > 0 ? "-" : "+")
			// + this.pad(Math.floor(Math.abs(offset) / 60), 2)
			// + ":" + this.pad(Math.abs(offset) % 60, 2);				
		},
		pad: function (amount, width ){
			var padding = "";
			while (padding.length < width - 1 && amount < Math.pow(10, width - padding.length - 1))
				padding += "0";
				return padding + amount.toString();
			}
	};
	
	
	var events = {},
		calendar_url = '',
		api_key = 'AIzaSyDHgaPIHRT-uIaI1G019ej6FGtJ6OAwvts',
		calendar_id = 'gflsoccer@gmail.com',
		time_min = '&timeMin=' + Timestamp.start();
	
	calendar_url = 'https://www.googleapis.com/calendar/v3/calendars/' + calendar_id + '/events?key=' + api_key + time_min;
	
	return $resource(calendar_url);
});