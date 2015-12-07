var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 9899,
    server,
    mysql = require('mysql'),
    sqlConfig = require('./sql'),
    connection = mysql.createConnection(sqlConfig);

var test = require('./server/test'),
    plate = require('./server/plate'),
    region = require('./server/region'),
    disaster = require('./server/disaster'),
    climate = require('./server/climate'),
    landscape = require('./server/landscape'),
    resources = require('./server/resources'),
    diversity = require('./server/diversity');

process.stdin.resume();//so the program will not close instantly

function exitHandler(options, err) {
    if (options.cleanup) console.log('clean');
    if (err) console.log(err.stack);
    if (options.exit) {
        connection.end();
        console.log("exiting");
        process.exit();
    }
}

//do something when app is closing
process.on('exit', exitHandler.bind(null, {cleanup:true}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));

app.use(cors());
app.use(bodyParser.json());

connection.connect();

app.use("/scripts", express.static(__dirname + "/bower_components"));

app.use("/", express.static(__dirname + "/client"));

app.get("/test", test.getMe);

app.get("/plates", plate.getPlates(connection));

app.get("/regionTypes", region.regionTypes(connection));
app.get("/region", region.regionList(connection));
app.post("/region", region.addRegion(connection));
app.put("/region", region.updateRegion(connection));

app.get("/disasterTypes", disaster.disasterTypes(connection));
app.get("/disaster", disaster.disasterInformation(connection));
app.post("/disaster", disaster.disasterEvent(connection));

app.get("/climateTypes", climate.climateTypes(connection));
app.get("/climate", climate.climateForRegion(connection));
app.post("/climate", climate.addData(connection));

app.get("/landscape", landscape.getLandscapeData(connection));

app.get("/resources", resources.getResources(connection));

app.get("/diversity", diversity.getSpecies(connection));

/*
 * return this page when no valid path is found.
 */
app.use(function (request, response, next) {
    response.status(404).send("Nothing found here");
});

server = app.listen(port, function () {

});