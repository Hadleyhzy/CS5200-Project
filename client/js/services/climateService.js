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
                "windSpeed":data.windSpeed,
                "humidity":data.humidity,
                "precipitation":data.precipitation,
                "isFor":data.isFor,
                "climateType":data.climateType,
                "min":data.min,
                "max":data.max,
                "surfaceTemp":data.surfaceTemp,
                "airTemp":data.airTemp,
                "averageTemp":data.averageTemp
            }
        });
    };

    this.getClimate = function (data) {
        return $http({
            "method":"GET",
            "url":"/climate",
            "params": {
                "startDate":data,
                "endDate":data,
                "regionId":data
            }
        });
    };
});
