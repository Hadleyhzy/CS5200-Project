angular.module('cs5200Project')
.service('regionService', function ($http) {
    this.getRegionTypes = function () {
        return $http({
            "method":"GET",
            "url":"/regionTypes"
        });
    };

    this.getPlates = function () {
        return $http({
            "method":"GET",
            "url":"/plates"
        });
    };

    this.addRegion = function (regionName, regionArea, regionType, plate) {
        return $http({
            "method":"POST",
            "url":"/region",
            "headers": {
                "Content-Type":"application/json"
            },
            "data": {
                "name":regionName,
                "area":regionArea,
                "regionType":regionType,
                "belongsTo":plate
            }
        });
    };

    this.updateRegion = function (regionName, regionArea, regionId) {
        return $http({
            "method":"PUT",
            "url":"/region",
            "params": {
                "name":regionName,
                "area":regionArea,
                "regionId":regionId
            }
        });
    };

    this.getRegions = function () {
        return $http({
            "method":"GET",
            "url":"/region"
        });
    };

    // this.getRegionDetails = function () {
    //     return $http({
    //         "method":"GET",
    //         "url":"/regionDetails"
    //     });
    // };
});
