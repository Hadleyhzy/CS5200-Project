angular.module('cs5200Project')
.controller('resourceController', function ($scope, $location, resourceService, regionService) {
    $scope.initRegion = function () {
        regionService.getRegions().then(function (result) {
            var lookup = {}, array = result.data;
            for (var i = 0, len = array.length; i < len; i++) {
                lookup[array[i].id] = array[i];
            }
            $scope.regions = lookup;
        });
    };

    $scope.$watch('resource.regionId', function (newValue, oldValue) {
        if ($scope.resource && $scope.resource.regionId) {
            resourceService.getResource({
                "regionId":$scope.resource.regionId
            })
            .then(function (result) {
                $scope.resourceInfo = result.data;
            }, function (error) {
                console.log(error);
            });
        }
    });
});
