angular.module('cs5200Project')
.service('resourceService', function ($http) {
    this.getResource = function (data) {
        return $http({
            "method":"GET",
            "url":"/resources",
            "params": {
                "regionId":data.regionId
            }
        });
    };
});
