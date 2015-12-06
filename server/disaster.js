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
        var queryString = prepareDisasterInsert(request.body, connection);
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

function prepareDisasterInsert (queryParameters, connection) {
    var startDate = queryParameters.start || '',
        endDate = queryParameters.end || '',
        casualty = queryParameters.casualty || '',
        propertyLost = queryParameters.propertyLost || '',
        type = queryParameters.type || '',
        queryString = 'INSERT INTO Disaster (start, end, casualty, propertyLost, type) VALUES ('
            + 'STR_TO_DATE(' + connection.escape(startDate) + ', "%m-%d-%Y %H:%i:%s"),'
            + 'STR_TO_DATE(' + connection.escape(endDate) + ', "%m-%d-%Y %H:%i:%s"),'
            + connection.escape(casualty) + ','
            + connection.escape(propertyLost) + ','
            + connection.escape(type)
            + ')';
        return queryString;
}
