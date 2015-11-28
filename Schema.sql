CREATE TABLE Plate (
	id int PRIMARY KEY AUTO_INCREMENT,
	name varchar(200) NOT NULL,
	area double DEFAULT NULL
);

CREATE TABLE Continent (
	id int PRIMARY KEY AUTO_INCREMENT,
	name varchar(200) NOT NULL,
	area double DEFAULT NULL
);

CREATE TABLE IsOn (
	isOn int,
	FOREIGN KEY(isOn) REFERENCES Plate(id) ON UPDATE cascade ON DELETE cascade,
	contains int,
	FOREIGN KEY(contains) REFERENCES Continent(id) ON UPDATE cascade ON DELETE cascade,
	PRIMARY KEY(isOn, contains)
);

CREATE TABLE RegionType (
	id int PRIMARY KEY AUTO_INCREMENT,
	name varchar(200) NOT NULL,
	description varchar(1000)
);

CREATE TABLE Region (
	id int PRIMARY KEY AUTO_INCREMENT,
	name varchar(200) NOT NULL,
	area double DEFAULT NULL,
	type int NOT NULL,
	FOREIGN KEY(type) REFERENCES RegionType(id) ON UPDATE cascade ON DELETE no action,
	belongsTo int NOT NULL,
	FOREIGN KEY(belongsTo) REFERENCES Plate(id) ON UPDATE cascade ON DELETE cascade
);

CREATE TABLE Location (
	id int PRIMARY KEY AUTO_INCREMENT,
	latitude varchar(100) NOT NULL,
	longitude varchar(100) NOT NULL,
	timeZone varchar(100) NOT NULL,
	partOf int NOT NULL,
	FOREIGN KEY(partOf) REFERENCES Region(id) ON UPDATE cascade ON DELETE cascade
);

CREATE TABLE Landscape (
	id int PRIMARY KEY AUTO_INCREMENT,
	vegetation varchar(1000) NOT NULL,
	isFor int NOT NULL,
	FOREIGN KEY(isFor) REFERENCES Region(id) ON UPDATE cascade ON DELETE cascade
);

CREATE TABLE SurfaceElevation (
	id int PRIMARY KEY AUTO_INCREMENT,
	min int,
	max int,
	average int,
	landscape int NOT NULL UNIQUE,
	FOREIGN KEY(landscape) REFERENCES Landscape(id) ON UPDATE cascade ON DELETE cascade
);

CREATE TABLE Diversity (
	id int PRIMARY KEY AUTO_INCREMENT,
	species varchar(200) NOT NULL,
	belongsTo int NOT NULL,
	FOREIGN KEY(belongsTo) REFERENCES Region(id) ON UPDATE cascade ON DELETE cascade
);

CREATE TABLE ResourceType (
	id int PRIMARY KEY AUTO_INCREMENT,
	name varchar(200),
	description varchar(1000)
);

CREATE TABLE Resources (
	id int PRIMARY KEY AUTO_INCREMENT,
	capacity varchar(100),
	type int NOT NULL,
	FOREIGN KEY(type) REFERENCES ResourceType(id) ON UPDATE cascade ON DELETE no action,
	partOf int NOT NULL,
	FOREIGN KEY(partOf) REFERENCES Region(id) ON UPDATE cascade ON DELETE cascade
);

CREATE TABLE ClimateType (
	id int PRIMARY KEY AUTO_INCREMENT,
	name varchar(200),
	description varchar(1000)
);

CREATE TABLE Climate (
	id int PRIMARY KEY AUTO_INCREMENT,
	windSpeed double,
	humidity double,
	precipitation double,
	date datetime NOT NULL DEFAULT now(),
	isFor int NOT NULL,
	FOREIGN KEY(isFor) REFERENCES Region(id) ON UPDATE cascade ON DELETE cascade,
	type int NOT NULL,
	FOREIGN KEY(type) REFERENCES ClimateType(id) ON UPDATE cascade ON DELETE no action
);

CREATE TABLE Temperature (
	id int PRIMARY KEY AUTO_INCREMENT,
	min double,
	max double,
	surfaceTemp double,
	airTemp double,
	averageTemp double,
	climate int NOT NULL UNIQUE,
	FOREIGN KEY(climate) REFERENCES Climate(id) ON UPDATE cascade ON DELETE cascade
);

CREATE TABLE DisasterType (
	id int PRIMARY KEY AUTO_INCREMENT,
	name varchar(200),
	description varchar(1000)
);

CREATE TABLE Disaster (
	id int PRIMARY KEY AUTO_INCREMENT,
	start datetime NOT NULL,
	end datetime,
	casualty int,
	propertyLost double,
	type int NOT NULL,
	FOREIGN KEY(type) REFERENCES DisasterType(id) ON UPDATE cascade ON DELETE no action
);

CREATE TABLE Experienced (
	experienced int,
	FOREIGN KEY(experienced) REFERENCES Disaster(id) ON UPDATE cascade ON DELETE cascade,
	occuredAt int,
	FOREIGN KEY(occuredAt) REFERENCES Region(id) ON UPDATE cascade ON DELETE cascade,
	PRIMARY KEY(experienced, occuredAt)
);