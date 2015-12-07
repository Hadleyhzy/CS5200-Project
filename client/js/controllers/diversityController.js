angular.module('cs5200Project')
.controller('diversityController', function ($scope, $location, diversityService, regionService) {
    $scope.initRegion = function () {
        regionService.getRegions().then(function (result) {
            var lookup = {}, array = result.data;
            for (var i = 0, len = array.length; i < len; i++) {
                lookup[array[i].id] = array[i];
            }
            $scope.regions = lookup;
        });
    };

    $scope.$watch('diversity.regionId', function (newValue, oldValue) {
        if ($scope.diversity && $scope.diversity.regionId) {
            diversityService.getDiversity({
                "regionId":$scope.diversity.regionId
            })
            .then(function (result) {
                $scope.diversityInfo = result.data;
            }, function (error) {
                console.log(error);
            });
        }
    });
});
