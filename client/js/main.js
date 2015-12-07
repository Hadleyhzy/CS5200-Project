angular.module('cs5200Project', ['ngRoute'])
.config([
'$routeProvider',
function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
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

		.otherwise({redirectTo: '/'});
}]);