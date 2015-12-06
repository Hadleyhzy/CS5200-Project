angular.module('skeletonApp')
.controller('regionController', [
'$scope',
'$http',
function ($scope, $http) {
    $scope.text = "Region ready";
}]);