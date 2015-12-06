exports.getLandscapeData = function (connection) {
    return function (request, response) {
        var queryString = prepareLandscapeQuery();
        connection.query(queryString, [request.query.regionId], function (error, rows, fields) {
            if (error) {
                console.log(error);
                response.status(500).send("Server error");
            } else {
                response.status(200).send(rows);
            }
        });
    }
}

function prepareLandscapeQuery () {
    return 'SELECT * FROM Landscape l, SurfaceElevation se WHERE l.id=se.landscape AND l.isFor=?';
}