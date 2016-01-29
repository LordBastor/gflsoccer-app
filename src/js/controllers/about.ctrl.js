gfl.controllers.controller('AboutCtrl', function($scope, $stateParams)
{
	$scope.page_title = 'About GFL Soccer Enterprises';
	$scope.sub_title = 'Top professionals taking soccer to the next level';
	$scope.gfl_description = 'GFL has a very clear mission.  The Principals and Staff of GFL Soccer Enterprises are committed to providing excellent soccer training to recreational and competitive players, as well as penetrating all levels of the Soccer pyramid all the way up to the professional level by providing unique soccer experiences and opportunities to all levels of players.  We invite you to read our founders profile to understand what and how we do what we love, to encourage band motivate the athletes to reach their fullest potential.';
	$scope.email = 'contact@gflsoccer.com';
	$scope.bullets =
	[
		'Staff with professional team experience',
		'Over 50 combined years coaching youth teams',
		'Individualized training for maximum performance',
		'Multiple select teams traveling abroad',
		'Co-ed summer camps and beach soccer camps',
		'Actively supporting charity soccer',
		'Specialized team training sessions'
	];
	$scope.coaches =
	[{
		name: 'Eddie Loewen',
		photo: 'img/eddie1.jpg',
		description: 'A native of Lithuania, Loewen grew up in Germany and got his start as a player with youth clubs FC Preussen Espelkamp and SC Herford before starting his professional career with FC Remscheid in 1998. In 2000, Loewen headed to Berry College in Georgia, where he received a BA in Health & Physical Education.'
	},
	{
		name: 'Milen Gaganelov',
		photo: 'img/milen1.jpg',
		description: 'Milen brings a wealth of professional and youth coaching experience to the table for GFL Soccer Enterprises. His last professional assignment was with Indonesian Pro Club “Produta FC” from 2009 – 2010 where he managed the team alongside Kostadin Angelov.'
	}];
});