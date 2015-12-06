exports.getResources = function (connection) {
    return function (request, response) {
        var queryString = prepareResourcesQuery();
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

function prepareResourcesQuery () {
    return 'SELECT * FROM Resources r, ResourceType rt WHERE rt.id=r.type AND r.partOf=?';
}