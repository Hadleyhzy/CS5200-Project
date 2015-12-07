angular.module('cs5200Project', ['ngRoute'])
.config([
'$routeProvider',
function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
		})

        .when('/success', {
            templateUrl: 'views/success.html'
        })

        .when('/addRegion', {
            templateUrl: 'views/addRegion.html',
            controller: 'regionController'
        })

        .when('/updateRegion', {
            templateUrl: 'views/updateRegion.html',
            controller: 'regionController'
        })

        .when('/getRegion', {
            templateUrl: '/views/getRegion.html',
            controller: 'regionController'
        })

        .when('/addClimate', {
            templateUrl: '/views/addClimate.html',
            controller: 'climateController'
        })

        .when('/getClimate', {
            templateUrl: '/views/getClimate.html',
            controller: 'climateController'
        })

        .when('/getLandscape', {
            templateUrl: '/views/getLandscape.html',
            controller: 'landscapeController'
        })

        .when('/getResource', {
            templateUrl: '/views/getResource.html',
            controller: 'resourceController'
        })

		.otherwise({redirectTo: '/'});
}]);