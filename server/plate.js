exports.getPlates = function (connection) {
    return function (request, response) {
        var queryString = preparePlateQuery();
        connection.query(queryString, function (error, rows, fields) {
            if (error) {
                console.log(error);
                response.status(500).send("Server error");
            } else {
                response.status(200).send(rows);
            }
        });
    }
};

function preparePlateQuery () {
    return 'SELECT * FROM Plate';
}