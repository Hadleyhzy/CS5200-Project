exports.getSpecies = function (connection) {
    return function (request, response) {
        var queryString = prepareDiversityQuery();
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

function prepareDiversityQuery () {
    return 'SELECT * FROM Diversity d WHERE d.belongsTo=?';
}