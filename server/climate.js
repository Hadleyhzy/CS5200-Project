exports.addData = function (connection) {
    return function (request, response) {
        var insertObject = prepareClimateInsertData(request.body),
        queryString = prepareClimateInsert();
        connection.query(queryString, insertObject, function (error, rows, fields) {
            if (error) {
                console.log(error);
                response.status(500).send("Server error");
            } else {
                queryString = prepareTemperatureInsert();
                insertObject = prepareTemperatureInsertData(request.body, rows.insertId);
                connection.query(queryString, insertObject, function (error, rows, fields) {
                    if (error) {
                        console.log(error);
                        response.status(500).send("Server error");
                    } else {
                        response.status(200).send(rows);
                    }
                });
            }
        });
    }
}

exports.climateTypes = function (connection) {
    return function (request, response) {
        var queryString = prepareClimateTypesQuery();
        connection.query(queryString, function (error, rows, fields) {
            if (error) {
                console.log(error);
                response.status(500).send("Server error");
            } else {
                response.status(200).send(rows);
            }
        });
    }
}

exports.climateForRegion = function (connection) {
    return function (request, response) {
        var dateAndRegion = prepareClimateAndDateObject(request.query),
        queryString = prepareClimateForRegionAndDates(connection);
        console.log(dateAndRegion);
        connection.query(queryString, dateAndRegion, function (error, rows, fields) {
            if (error) {
                console.log(error);
                response.status(500).send("Server error");
            } else {
                response.status(200).send(rows);
            }
        });
    }
}

function prepareClimateAndDateObject (parameters) {
    return [
        new Date(parameters.startDate),
        new Date(parameters.endDate),
        parameters.regionId
    ];
}

function prepareClimateForRegionAndDates () {
    return 'SELECT * FROM Climate c, ClimateType ct, Temperature t WHERE ct.id=c.type AND c.id=t.climate AND c.date>=? AND c.date<=? AND c.isFor=?';
}

function prepareClimateInsert () {
    return 'INSERT INTO Climate SET ?';
}

function prepareClimateInsertData (parameters) {
    return {
        "windSpeed":parameters.windSpeed || '',
        "humidity":parameters.humidity || '',
        "precipitation":parameters.precipitation || '',
        "isFor":parameters.isFor || '',
        "type":parameters.climateType || ''
    };
}

function prepareTemperatureInsert () {
    return 'INSERT INTO Temperature SET ?';
}

function prepareTemperatureInsertData (parameters, climateId) {
    return {
        "min":parameters.min || '',
        "max":parameters.max || '',
        "surfaceTemp":parameters.surfaceTemp || '',
        "airTemp":parameters.airTemp || '',
        "averageTemp":parameters.averageTemp || '',
        "climate":climateId
    };
}

function prepareClimateTypesQuery () {
    return 'SELECT * FROM ClimateTypes';
}