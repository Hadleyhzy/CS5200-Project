angular.module('cs5200Project')
.service('disasterService', function ($http) {
    this.getDisasterTypes = function () {
        return $http({
            "method":"GET",
            "url":"/disasterTypes"
        });
    };

    this.getDisaster = function (data) {
        return $http({
            "method":"GET",
            "url":"/disaster",
            "params": {
                "name":data.name,
                "damage":data.propertyLost,
                "casualty":data.casualty,
                "location":data.locations
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
                "regions":data.regions
            }
        });
    };
});
