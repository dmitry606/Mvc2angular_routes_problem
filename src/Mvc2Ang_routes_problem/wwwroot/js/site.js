
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider',
	function ($routeProvider, $locationProvider) {
		$routeProvider
			//.when('/', {
			//	templateUrl: 'Index.html',
			//	controller: 'StartController',
			//})
			.when('/games', {
				templateUrl: 'partials/gameslist.html',
				controller: 'GameController',
				controllerAs: 'ctrl'
			})
			.when('/games/:gameId', {
				templateUrl: 'partials/game.html',
				controller: 'GameController',
				controllerAs: 'ctrl'
			});

		//$locationProvider.html5Mode(true);
	}]);


myApp.controller("IndexController", ['$route', '$routeParams', '$location',
  function ($route, $routeParams, $location) {
		this.$route = $route;
		this.$location = $location;
		this.$routeParams = $routeParams;
		
		this.doSomething = function () {
			alert("Something is done!");
		}
  }
]);

myApp.controller("GameController", ['$route', '$routeParams', '$location',
	function ($route, $routeParams, $location) {
		this.gameId = $routeParams['gameId'];
	}
]);