angular.module('cs5200Project')
.service('disasterService', function ($http) {
    this.getDisasterTypes = function () {
        return $http({
            "method":"GET",
            "url":"/disasterTypes"
        });
    };

    this.getDisaster = function (data, regions) {
        return $http({
            "method":"GET",
            "url":"/disaster",
            "params": {
                "type":data.type,
                "damage":data.damage,
                "casualty":data.casualty,
                "location[]":regions
            }
        });
    };

    this.addDisaster = function (data) {
        return $http({
            "method":"POST",
            "url":"/disaster",
            "headers": {
                "Content-Type":"application/json"
            },
            "data": {
                "start":data.start,
                "end":data.end,
                "casualty":data.casualty,
                "propertyLost":data.propertyLost,
                "disasterType":data.disasterType,
                "regions[]":data.regions
            }
        });
    };
});
