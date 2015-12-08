# CS5200-Project
Database Project
sql.json is the mysql database configuration which is as follows:
{
    "host": "",
    "port": "",
    "user": "",
    "password": "",
    "database": ""
}

All use cases have been delivered. Some of the use cases have been split into additional use cases.

The schema (CREATE tables) is in Schema.sql
The main rest end-points of the node server are in server.js
The end-points in turn access the DB server hosted on AWS (Amazon MySQL RDS) by the files in the folder server/
The entire front-end is in the client folder which is implemented using AngularJS