angular.module('cs5200Project')
.service('landscapeService', function ($http) {
    this.getLandscape = function (data) {
        return $http({
            "method":"GET",
            "url":"/landscape",
            "params": {
                "regionId":data.regionId
            }
        });
    };
});
