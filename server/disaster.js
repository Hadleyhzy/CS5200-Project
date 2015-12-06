exports.disasterInformation = function (connection) {
    return function (request, response) {
        var queryString = prepareDisasterFetchQuery(request.query, connection);
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

exports.disasterEvent = function (connection) {
    return function (request, response) {
        var insertObject = prepareDisasterInsertObject(request.body),
        queryString = prepareDisasterInsert();
        connection.query(queryString, insertObject, function (error, rows, fields) {
            if (error) {
                console.log(error);
                response.status(500).send("Server error");
            } else {
                response.status(200).send(rows);
            }
        });
    }
}

exports.disasterTypes = function (connection) {
    return function (request, response) {
        var queryString = 'SELECT * FROM DisasterType';
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

function prepareDisasterFetchQuery (queryParameters, connection) {
    var queryString = 'SELECT * FROM DisasterType t, Disaster d WHERE d.type = t.id';
    if (queryParameters.name) {
        queryString += ' AND t.name = ' + connection.escape(queryParameters.name);
    }
    if (queryParameters.damage) {
        queryString += ' AND d.propertyLost >= ' + connection.escape(queryParameters.damage);
    }
    if (queryParameters.casualty) {
        queryString += ' AND d.casualty >= ' + connection.escape(queryParameters.casualty);
    }
    if (queryParameters.location) {
        queryString += ' AND d.id IN (SELECT e.experienced FROM Experienced e, Region r WHERE e.occuredAt = r.id AND r.name = ' + connection.escape(queryParameters.location);
    }

    return queryString;
}

function prepareDisasterInsert () {
    return 'INSERT INTO Disaster SET ?';
}

function prepareDisasterInsertObject (parameters) {
    var startDate, endDate,
    casualty = parameters.casualty || '',
    propertyLost = parameters.propertyLost || '',
    type = parameters.type || '';
    startDate = (parameters.start ? new Date(parameters.start) : '');
    endDate = (parameters.start ? new Date(parameters.end) : '');
    return {
        "start":startDate,
        "end":endDate,
        "casualty":casualty,
        "propertyLost":propertyLost,
        "type":type
    };
}
