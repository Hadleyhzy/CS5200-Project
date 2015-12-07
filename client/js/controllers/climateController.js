angular.module('cs5200Project')
.controller('climateController', function ($scope, $location, climateService, regionService) {
    regionService.getRegionTypes().then(function (result) {
        $scope.regionTypeOptions = result.data;
    });
    regionService.getPlates().then(function (result) {
        $scope.plates = result.data;
    });

    $scope.addRegion = function () {
        regionService.addRegion(
            $scope.regionName,
            $scope.regionArea,
            $scope.regionType,
            $scope.plate
            )
        .then(function (result) {
            $scope.regionName = $scope.regionArea = $scope.regionType = $scope.plate = '';
            $location.path("/success");
        }, function (error) {
            console.log(error);
        });
    };

    $scope.updateRegion = function () {
        regionService.updateRegion(
            $scope.regionName,
            $scope.regionArea,
            $scope.regionId
            )
        .then(function (result) {
            $scope.regionName = $scope.regionArea = '';
            $scope.regionUpdate = false;
            $location.path("/success");
        }, function (error) {
            console.log(error);
        });
    };

    $scope.initRegion = function () {
        regionService.getRegions().then(function (result) {
            var lookup = {}, array = result.data;
            for (var i = 0, len = array.length; i < len; i++) {
                lookup[array[i].id] = array[i];
            }
            $scope.regions = lookup;
        });
    };

    $scope.$watch('regionId', function (newValue, oldValue) {
        if ($scope.regions) {
            $scope.regionName = $scope.regions[parseInt(newValue)].name;
            $scope.regionArea = $scope.regions[parseInt(newValue)].area;
            $scope.regionType = $scope.regions[parseInt(newValue)].type;
            $scope.plate = $scope.regions[parseInt(newValue)].belongsTo;
            $scope.regionUpdate = true;
        }
    });
});
