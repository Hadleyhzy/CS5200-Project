angular.module('cs5200Project')
.service('diversityService', function ($http) {
    this.getDiversity = function (data) {
        return $http({
            "method":"GET",
            "url":"/diversity",
            "params": {
                "regionId":data.regionId
            }
        });
    };
});
