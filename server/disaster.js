exports.disasterInformation = function (request, response) {
	response.status(200).send("Disaster Information has been retrieved");
}

function abc (request, response) {
	if (request.query.name) {
		response.send ("name worked");
	} else if (request.query.type) {
		response.send ("type worked");
	} else {
		response.send ("nothing");
	}
}