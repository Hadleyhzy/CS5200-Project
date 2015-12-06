exports.regionList = function (connection) {
    return function (request, response) {
        var queryString = 'SELECT * FROM Region r, RegionType rt WHERE rt.id=r.type';
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

exports.addRegion = function (connection) {
    return function (request, response) {
        var queryString = prepareRegionInsert(request.body, connection);
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

exports.updateRegion = function (connection) {
    return function (request, response) {
        var queryString = prepareRegionUpdate(request.query, connection);
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

exports.regionTypes = function (connection) {
    return function (request, response) {
        var queryString = prepareRegionTypesQuery();
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

function prepareRegionTypesQuery () {
    return 'SELECT * FROM RegionType';
}

function prepareRegionInsert (parameters, connection) {
    var name = parameters.name || '',
        area = parameters.area || '',
        type = parameters.type || '',
        belongsTo = parameters.belongsTo || '',
        queryString;
    queryString = 'INSERT INTO Region (name, area, type, belongsTo) VALUES ('
        + connection.escape(name) + ','
        + connection.escape(area) + ','
        + connection.escape(type) + ','
        + connection.escape(belongsTo)
        + ')';
    return queryString;
}

function prepareRegionUpdate (parameters, connection) {
    var queryString = 'UPDATE Region SET ';
    if (parameters.name) {
        queryString += 'name=' + connection.escape(parameters.name);
        if (parameters.area) {
            queryString += ', area=' + connection.escape(parameters.area);
        }
    } else {
        queryString += 'area=' + connection.escape(parameters.area);
    }
    queryString += ' WHERE id=' + connection.escape(parameters.regionId);
    return queryString;
}