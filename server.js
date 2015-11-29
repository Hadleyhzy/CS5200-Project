var express = require('express'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	app = express(),
	port = 9899,
	server;

var test = require('./server/test'),
	disaster = require('./server/disaster');

app.use(cors());
app.use(bodyParser.json());

app.use("/scripts", express.static(__dirname + "/bower_components"));

app.use("/", express.static(__dirname + "/client"));

app.get("/test", test.getMe);
app.get("/disaster", disaster.disasterInformation);

/*
 * return this page when no valid path is found.
 */
app.use(function (request, response, next) {
	response.status(404).send("Nothing found here");
});

server = app.listen(port, function () {

});