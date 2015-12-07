angular.module('cs5200Project')
.service('climateService', function ($http) {
    this.getClimateTypes = function () {
        return $http({
            "method":"GET",
            "url":"/climateTypes"
        });
    };

    this.addClimate = function (data) {
        return $http({
            "method":"POST",
            "url":"/climate",
            "headers": {
                "Content-Type":"application/json"
            },
            "data": {
                "windSpeed":regionName,
                "humidity":regionArea,
                "precipitation":regionType,
                "isFor":plate,
                "climateType":,
                "min":parameters.min || '',
                "max":parameters.max || '',
                "surfaceTemp":parameters.surfaceTemp || '',
                "airTemp":parameters.airTemp || '',
                "averageTemp":parameters.averageTemp
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

    this.getClimate = function () {
        return $http({
            "method":"GET",
            "url":"/climate",
            "params": {
                "startDate":,
                "endDate":,
                "regionId":
            }
        });
    };
});
