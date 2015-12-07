angular.module('cs5200Project')
.service('regionService', function ($http) {
    this.getRegionTypes = function () {
        return $http({
            "method":"GET",
            "url":"/regionTypes"
        });
    };
});

angular.module('cs5200Project')
.controller('regionController', function ($scope, $http, regionService) {
    $scope.text = "Region ready";
    regionService.getRegionTypes().then(function(result) {
        $scope.regionTypeOptions = result.data;
    });
});
