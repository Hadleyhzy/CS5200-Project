exports.regionList = function (connection) {
    return function (request, response) {
        var queryString = 'SELECT * FROM Region';
        connection.query(queryString, function (error, rows, fields) {
            if (error) {
                response.status(500).send("Server error");
            } else {
                response.status(200).send(rows);
            }
        });
    }
}