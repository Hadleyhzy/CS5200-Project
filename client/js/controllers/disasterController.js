angular.module('cs5200Project')
.controller('disasterController', function ($scope, $location, disasterService, regionService) {
    disasterService.getDisasterTypes().then(function (result) {
        $scope.disasterTypeOptions = result.data;
    });

    $scope.addDisaster = function () {
        var regionsData = [];
        for (var i = 0; i < $scope.disaster.regionId.length; i++) {
            regionsData[i] = {
                "id":$scope.disaster.regionId[i]
            };
        }
        disasterService.addDisaster({
            "start":$scope.startDate,
            "end":$scope.endDate,
            "casualty":$scope.casualty,
            "propertyLost":$scope.propertyLost,
            "disasterType":$scope.disasterType,
            "regions":regionsData
        })
        .then(function (result) {
            $location.path("/success");
        }, function (error) {
            console.log(error);
        });
    };

    $scope.getDisaster = function () {
        disasterService.getDisaster({
            "type":$scope.disasterType,
            "damage":$scope.propertyLost,
            "casualty":$scope.casualty
        }, $scope.disaster.regionId)
        .then(function (result) {
            $scope.disasterInfo = result.data;
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
