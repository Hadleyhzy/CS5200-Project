angular.module('cs5200Project')
.controller('landscapeController', function ($scope, $location, landscapeService, regionService) {
    $scope.initRegion = function () {
        regionService.getRegions().then(function (result) {
            var lookup = {}, array = result.data;
            for (var i = 0, len = array.length; i < len; i++) {
                lookup[array[i].id] = array[i];
            }
            $scope.regions = lookup;
        });
    };

    $scope.$watch('landscape.regionId', function (newValue, oldValue) {
        if ($scope.landscape && $scope.landscape.regionId) {
            landscapeService.getLandscape({
                "regionId":$scope.landscape.regionId
            })
            .then(function (result) {
                $scope.landscapeInfo = result.data;
            }, function (error) {
                console.log(error);
            });
        }
    });
});
