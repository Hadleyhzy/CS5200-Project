INSERT INTO Plate (name, area) VALUES
("African Plate", 61300000),
("Antarctic Plate",60900000),
("Australia Plate",47000000),
("Eurasian Plate",67800000),
("Nazca Plate", 15600000),
("North American Plate",75900000),
("Pacific Plate",103300000),
("Philippines Sea Plate",5555000),
("Indian Plate",11900000),
("South American Plate",43600000),
("Somali Plate",16700000),
("Cocos Plate",2900000);

INSERT INTO Continent (name,area) VALUES
("Africa",30221532),
("Antartica",14000000),
("Asia",44579000),
("Australia Continent",8600000),
("Europe",10180000),
("North America",24709000),
("South America",17840000);


INSERT INTO RegionType (name,description) VALUES
("river","A river is a natural flowing watercourse, usually freshwater, flowing towards an ocean, sea, lake or another river. In some cases a river flows into the ground and becomes dry at the end of its course without reaching another body of water. Small rivers can be referred to using names such as stream, creek, brook, rivulet, and rill. "),
("range","Range, a geographic term referring to a chain of hills or mountains, a somewhat linear, complex mountainous or hilly area."),
("Massif","a massif is a section of a planet's crust that is demarcated by faults or flexures. In the movement of the crust, a massif tends to retain its internal structure while being displaced as a whole. The term is also used to refer to a group of mountains formed by such a structure."),
("Peninsula",'A peninsula (Latin: paeninsula from paene "almost" and insula "island") is a piece of land that is bordered by water on three sides but connected to mainland.'),
("Desert","A desert is a barren area of land where little precipitation occurs and consequently living conditions are hostile for plant and animal life. "),
("lake","A lake is an area of variable size filled with water, localized in a basin, that is surrounded by land, apart from any river or other outlet that serves to feed or drain the lake."),
("island","An island /ˈaɪlənd/ or isle /ˈaɪl/ is any piece of sub-continental land that is surrounded by water. Very small islands such as emergent land features on atolls can be called islets, skerries, cays or keys. An island in a river or a lake island may be called an eyot or ait, or a holm. "),
("Bay","A bay is a body of water connected to an ocean or lake, formed by an indentation of the shoreline.[1] A large bay may be called a gulf, a sea, a sound, or a bight. A cove is a smaller circular or oval coastal inlet with a narrow entrance, some coves may be referred to as bays. "),
("Ridge","A ridge or mountain ridge is a geological feature consisting of a chain of mountains or hills that form a continuous elevated crest for some distance. Ridges are usually termed hills or mountains as well, depending on size. "),
("Forest",""),
("Rain forest",""),
("Westland","");

INSERT INTO Region (name,area) VALUES
("Yelow river",752000);

INSERT INTO Location(latitude,longtitude,timezone) VALUES
('119°15′00″E','37°46′48″N','ADT');

INSERT INTO Landscape(vegetation, isFor) VALUES
("a hill is universally considered to be less tall and less steep than a mountain. ",7),
("A mountain is a large landform that stretches above the surrounding land in a limited area, usually in the form of a peak. A mountain is generally steeper than a hill. Mountains are formed through tectonic forces or volcanism.",8),
('Extreme',8),
("volcanoes",7),
("the great ocean basins",7);

INSERT INTO SurfaceElevation(min,max,average,landscape) VALUES
(0,4500,684,1),
(100,200,150,2);

INSERT INTO Diversity(species) VALUES

INSERT INTO ResourceType(name, description) VALUES
("Forests","A forest is a large area of land covered with trees or other woody vegetation.[1] Hundreds of more precise definitions of forest are used throughout the world, incorporating factors such as tree density, tree height, land use, legal standing and ecological function."),
("Fresh water","Fresh water is naturally occurring water on Earth's surface in ice sheets, ice caps, glaciers, icebergs, bogs, ponds, lakes, rivers and streams, and underground as groundwater in aquifers and underground streams. "),
("Minerals:gold","Gold is a chemical element with symbol Au (from Latin: aurum) and atomic number 79. In its purest form, it is a bright, slightly reddish yellow, dense, soft, malleable and ductile metal. Chemically, gold is a transition metal and a group 11 element."),
("Minerals:iron","Iron is a chemical element with symbol Fe (from Latin: ferrum) and atomic number 26. It is a metal in the first transition series.[4] It is by mass the most common element on Earth, forming much of Earth's outer and inner core. It is the fourth most common element in the Earth's crust."),
("Minerals:copper","Copper is a chemical element with symbol Cu (from Latin: cuprum) and atomic number 29. It is a soft, malleable and ductile metal with very high thermal and electrical conductivity. A freshly exposed surface of pure copper has a reddish-orange color. It is used as a conductor of heat and electricity, as a building material, and as a constituent of various metal alloys."),
("Minerals:Silver",'Silver is a chemical element with symbol Ag (Greek: άργυρος árguros, Latin: argentum, both from the Indo-European root *h₂erǵ- for "grey" or "shining") and atomic number 47. A soft, white, lustrous transition metal, it possesses the highest electrical conductivity, thermal conductivity and reflectivity of any metal.'),
("fossile fuels:natural gas","Natural gas is a naturally occurring hydrocarbon gas mixture consisting primarily of methane, but commonly including varying amounts of other higher alkanes, and sometimes a small percentage of carbon dioxide, nitrogen, and/or hydrogen sulfide."),
("fossile fuels:Petroleum",'Petroleum (L. petroleum, from early 15c. "petroleum, rock oil" (mid-14c. in Anglo-French), from Medieval Latin petroleum, from Latin: petra: "rock" + oleum: "oil".[1][2][3]) is a naturally occurring, yellow-to-black liquid found in geological formations beneath the Earth\'s surface, which is commonly refined into various types of fuels.');


INSERT INTO Resource(capacity) VALUES
(742443 square kilometers),

INSERT INTO ClimateType(name,description) VALUES
("Tropical rainforest climate","All 12 moths have averae precipitation of at least 60mm. These climates usually occur within 5-10 meridian latitude of the equator.This climate is dominated by the doldrums low-pressure system all year round, so has no natural seasons."),
("Tropical monsoon climate",'This type of climate, most common in South America, results from the monsoon winds which change direction according to the seasons. This climate has a driest month (which nearly always occurs at or soon after the "winter" solstice for that side of the equator) with rainfall less than 60 mm, but more than 1/25 the total annual precipitation.'),
("Tropical wet and dry or savanna climate","These climates have a pronounced dry season, with the driest month having precipitation less than 60 mm and less than 1/25 of the total annual precipitation."),
("Dry(arid and semiarid) climates","These climates are characterized by actual precipitation less than a threshold value set equal to the potential evapotranspiration."),
("Dry-summer or Mediterranean climates","These climates usually occur on the western sides of continents between the latitudes of 30° and 50°.[7] These climates are in the polar front region in winter, and thus have moderate temperatures and changeable, rainy weather."),
("Warm Temperate climates","These climates usually occur on the eastern coasts and eastern sides of continents, from 25 to 45 latitude, although in China and nearby areas they are found as far south as 20N."),
("Maritime temperate climates or Oceanic climates","usually occur on the western sides of continents between the latitudes of 45° and 60°, they are typically situated immediately poleward of the Mediterranean climates, although in Australia and extreme southern Africa this climate is found immediately poleward of temperate climates, and at a somewhat lower latitude."),
("Temperature highland tropical climate with dry winters","a type of climate characteristic of the highlands inside the tropics of Mexico, Peru, Bolivia, Madagascar, Zambia, Zimbabwe and South Africa, but it is also found in central Argentina, outside the tropics. Winters are noticeable and dry, and summers can be very rainy. In the tropics, the rainy season is provoked by the tropical air masses and the dry winters by subtropical high pressure."),
("Maritime subarctic climates","These climates occur poleward of the maritime temperate climates, and are confined either to narrow coastal strips on the western poleward margins of the continents, or, especially in the Northern Hemisphere, to islands off such coasts."),
("Dry-summer maritime subalpine climates","This climate exists in high-elevation areas adjacent to coastal Csb climate areas, where the strong maritime influence prevent the average winter monthly temperature from dropping below −3 °C. This climate is extremely rare and is only found in isolated areas of the Cascades and Andes Mountains, as the dry-summer climate extends further poleward in the Americas than elsewhere."),
("Hot summer continenal climates","Dfa climates usually occur in the high 40 and low 50 latitudes, with a qualifying average temperature in the warmest month of >22 °C/72 °F. In Europe, these climates tend to be much drier than in North America. In eastern Asia, Dwa climates extend further south due to the influence of the Siberian high pressure system, which also causes winters there to be dry, and summers can be very wet because of monsoon circulation. Dsa exists at higher elevations adjacent to areas with hot summer Mediterranean (Csa) climates."),
("Warm summer continental or hemiboreal climates","Dfb and Dwb climates are immediately north of hot summer continental climates, generally between 45° and 58° latitude in North America and Asia, and also in central and eastern Europe and Russia, between the maritime temperate and continental subarctic climates, where it extends up to 65 degrees latitude in places."),
("Continental subarctic or boreal(taiga) climates","occur poleward of the other group D climates, mostly in the 50° and low 60° north latitude, although it might occur as far north as 70°N."),
("Continental subarctic climates with extremely severe winters","Places with this climate have the temperature in their coldest month lower than −38 °C. These climates occur only in eastern Siberia. The names of some of the places with this climate have become veritable synonyms for extreme, severe winter cold."),
("Tundra climate","Warmest month has an average temperature between 0 and 10 °C. These climates occur on the northern edges of the North American and Eurasian land masses, and on nearby islands. ET climates are also found on some islands near the Antarctic Convergence, and at high elevations outside the polar regions, above the tree line."),
("Ice cap climate","All twelve months have average temperatures below 0 °C (32 °F). This climate is dominant in Antarctica and inner Greenland, but also occurs at extremely high altitudes on mountains, above even tundra.");



INSERT INTO Climate(windspeed, humidity,precipitation,date) VALUES
(4,43%,4 millitres,2015.1.13),

INSERT INTO Temperature(min,max,surfaceTemp,airTemp,averTemp) VALUES
(2,8,5,3,2),

INSERT INTO DisasterType(name,description) VALUES
("Biological hazards:epidemics","unusual increase in the number of cases of an infectious disease which already exists in a certain region or population."),
("Biological hazards:animal and insect infestation","Pervasive influx and development of insects or parasites affecting humans, animals, crops and materials. "),
("Geography hazards:earthquakes","Earthquakes are the result of forces deep within the earth's interior. Sudden break within the upper layers of the earth, sometimes breaking the surface, resulting in the vibration of the ground, which where strong enough will cause the collapse of buildings and destruction of life and property. "),
("Mass movement dry","A landslide is the movement of soil or rock controlled by gravity and the speed of the movement usually ranges between slow and rapid, but not very slow. It can be superficial or deep, but the materials have to make up a mass that is a portion of the slope or the slope itself. "),
("Tsunami","A tsunami  is a series of waves caused by a rapid displacement of a body of water (ocean, lake). The waves are characterised by a very long wavelength and their amplitude is much smaller offshore. The impact in coastal areas can be very destructive as the waves advance inland and can extend over thousands of kilometers."),
("Volcanic eruptions","Volcanic eruptions happen when lava and gas are discharged from a volcanic vent. The most common consequences of this are population movements as large numbers of people are often forced to flee the moving lava flow. Volcanic eruptions often cause temporary food shortages and volcanic ash landslides called Lahar. "),
("Drought","Drought is an insidious phenomenon. Unlike rapid onset disasters, it tightens its grip over time, gradually destroying an area. In severe cases, drought can last for many years and have a devastating effect on agriculture and water supplies. "),
("Heat waves","A heat wave is a prolonged period of excessively hot and sometimes also humid weather relative to normal climat patterns of a certain region. "),
("Cold waves,winter storms and extreme winter conditions","Cold waves, heavy snowfall and extreme cold can immobilize an entire region. Even areas that normally experience mild winters can be hit with a major snowstorm or extreme cold. Winter storms can result in flooding, storm surge, closed highways, blocked roads, downed power lines and hypothermia."),
("Climatological hazards:Wildfires/urban fire","Wildfire and urban fires describes an uncontrolled burning fire, usually in wild lands, which can cause damage to forestry, agriculture, infrastructure and buildings."),
("Floods","General floods can be predicted in advance, except in the case of flash floods. The impact of flooding can include destruction of housing, crops, cattle and people. Volunteers assist well in the early days of these situations, helping to move people around and save belongings."),
("Hydrological hazards:Mass movement wet(subsidences","Subsidence is the motion of the Earth's surface as it shifts downward relative to a datum (e.g. the sea level). Subsidence dry can be the result of: geological faulting, isostatic rebound, human impact (e.g. mining, extraction of natural gas) etc. Subsidence (wet) can be the result of: karst, changes in soil water saturation, permafrost degradation (thermokarst) etc."),
("Hydrological hazards:Mass movement wet(rockfalls)","Rockfall refers to quantities of rock or stone falling freely from a cliff face. It is caused by undercutting, weathering or permafrost degradation."),
("Hydrological hazards:Mass movement wet(Avalanche)","Avalanche describes a quantity of snow or ice that slides down a mountainside under the force of gravity. It occurs if the load on the upper snow layers exceeds the bonding forces of the entire mass of snow. It often gathers material that is underneath the snowpack like soil, rock etc (debris avalanche)."),
("Hydrological hazards:Mass movement wet(Landsslide)","A landslide is the movement of soil or rock controlled by gravity and the speed of the movement usually ranges between slow and rapid, but not very slow. It can be superficial or deep, but the materials have to make up a mass that is a portion of the slope or the slope itself. The movement has to be downward and outward with a free face."),
("Meteorological hazards:Tropical storms,hurricanes,cyclones and typhoons","Essentially, these disaster types refer to a large scale closed circulation system in the atmosphere which combines low pressure and strong winds that rotate counter clockwise in the northern hemisphere and clockwise in the southern hemisphere."),


INSERT INTO Disaster(start date time, end date time,casualty, propertylost)
(1931,1931,3700000,countless),
