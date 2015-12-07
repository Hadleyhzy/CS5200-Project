angular.module('cs5200Project')
.controller('mainController', [
'$scope',
'$http',
function ($scope, $http) {
	$scope.text = "Data binding";
}]);