Use Cases
DONE
UI
I:Creating and Updating the earth location database
Actors: Geographical Information System
Step by Step Description:
1.[GIS] The Geographical Information System sends a request to update the location
database.
2.[System] The system returns a confirmation message if the request is allowed(that is, if
the user has sufficient privilege to update the information).
3.[System] System sends the list of region.
4.[GIS] GIS selects name of the region or chooses to insert a new region with the new information.
5.[System] If an existing region is selected, its data is presented for updation.
6.[GIS] GIS sends data of this region to the system.
7.[System] System updates the data for the region.
7.[System] If user chooses to insert, system stores the data from user.
8.[System] The system stores the data.
9.[System] The system sends a confirmation message if the data was stored successfully.
10.[System] If there was a failure, the failure message is sent.
SELECT * FROM Region;

INSERT INTO Region
VALUES

UPDATE Region
SET
WHERE


DONE
UI
II: Updating regional weather information daily
Actors: Weather Stations and Regional/Global Satellite
Step by step description:
1. [Weather Stations and Regional/Global Satellite] Weather stations and regional/global
satellite select location and date for a certain region and enter humidity, temperature, air
pressure, precipitation and air composition for that region.
2. [System] The system checks if the requested action is allowed.
3. [System] If the access is allowed, the system adds this to the database.
4. [System] The system returns a confirmation message if the insert was successful.
5. [System] If there's a failure, the system sends an error message to the weather updating
system.
SELECT * FROM Region;

INSERT INTO Climate (windSpeed, humidity, precipitation, isFor, type)
VALUES ()


DONE
III: Updating the record of the natural disasters
Actors: Natural Disaster Management Department
Step by Step description:
1.[Natural Disaster Management Department] Natural Disaster Management Department
sends a request to update the information for the record of the natural disasters.
2.[System] The system checks if the requested action is allowed.
3.[Natural Disaster Management Department] Natural Disaster Management Department
selects the start/end date and location of the natural disasters.
4.[Natural Disaster Management Department] Natural Disaster Management Department
adds the record if the natural disasters to the database system.
5.[System] The system returns a confirmation message if the insert was successful.
6.[System] If there's a failure, the system sends an error message to the weather updating
system.
INSERT INTO Disaster (start, end, casualty, propertyLost, type)
VALUES ()


DONE
IV: Retrieving information about natural disasters
Actors: Natural Disaster Management Department
Step by step:
1.[Natural Disaster Management Department] Natural Disaster Management Department
can enter any type of data that is related to the disaster: disaster name, disaster type, damage
done and location.
2.[System] The system retrieves all disasters information matching the filter and presents it
to the Natural Disaster Management Department if the disaster information exists.
3.[System] If the disaster information doesn't exist, the system presents the user with an
appropriate error message


DONE
UI
V: Retrieving information to analyze the climate change
Actors: Environmental Scientists
Step by step description:
1.[Environmental Scientists] Enter the location and start/end date(year) of a certain
region.
2.[System] Database system outputs all the weather data of this region.
SELECT * FROM Climate WHERE start=? AND end=?


DONE
UI
VI: Retrieving the information of the land and resources
Actors: Department of Land and Resources
Step by step description:
1.[Department of Land and Resources] Department of Land and Resources sends a request
to retrieve the information of natural resources distribution.
2.[System] The database system returns a confirmation message if the request is allowed
3.[Department of Land and Resources] Department of Land and Resources selects any
number of regions and one type of resources.
4.[System] The system returns the information of this selection if the insert was successful
5.[System] If there's a failure, the system notifies the administrator and sends an error
message to the Department of Land and Resources.
SELECT *
FROM Region r, Resources res
WHERE res.partOf=r.id AND r.id=? AND res.type IN (
    SELECT rt.id
    FROM ResourceType rt
    WHERE rt.id=?
)


DONE
VII: Retrieving general geography information
Actor: general users(no authority access, can be students/travelers)
Step by Step description:
1.[General Users] General users can select more than one region and start/end date.
2.[System] The system returns the information of this selection if the insert was successful.
3.[System] If there's a failure, the system notifies the administrator and sends an error
message to general users.
SELECT *
FROM Region r, Landscape l, Diversity d, SurfaceElevation se, Location loc, Resources r
WHERE r.id=?
    AND l.isFor=r.id
    AND se.landscape=l.id
    AND d.belongsTo=r.id
    AND loc.partOf=r.id
    AND r.partOf=r.id