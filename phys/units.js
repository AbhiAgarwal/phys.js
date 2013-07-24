/**
* units.js
* http://github.com/abhiagarwal/phys.js
*
* Copyright 2013 Abhi Agarwal
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var units = exports;

/*
* Light Year
* The distance that light travels in a vacuum in one Julian year.
* https://en.wikipedia.org/wiki/Light-year 
*/
units.lightyear = 9.46 * Math.pow(10, 15);
units.lightyearUnit = "m";

/*
* Parsec
* A unit of length used in astronomy, equal to about 30.9 trillion kilometres or 3.26 light-years.
* http://en.wikipedia.org/wiki/Parsec
*/
units.parsec = 3.261;
units.parsecUnit = "y";

/*
* Astronomical unit
* A unit of length now defined as exactly 149,597,870,700 m or roughly the average Earth–Sun distance.
* https://en.wikipedia.org/wiki/Astronomical_unit
*/
units.astronomical = 1.50 * Math.pow(10, 11);
units.astronomicalUnit = "m";

/*
* Radian
* The standard unit of angular measure.
* http://en.wikipedia.org/wiki/Radian
*/
units.radian = 180 / Math.Pi;
units.SingleradianUnit = "Degree";
units.radianUnit = "Degrees";

/*
* Kilowatt hour
* A unit of energy equal to 1000 watt hours or 3.6 megajoules.
* http://en.wikipedia.org/wiki/Kilowatt_hour
*/
units.kilowatthour = 3.60 * Math.pow(10, 6);
units.kilowatthourUnit = "J";

/*
* Atmosphere Unit (Newton Meter)
* The standard atmosphere (symbol: atm) is an international reference pressure defined as 101325 Pa and formerly used as a unit of pressure.
* https://en.wikipedia.org/wiki/Atmosphere_(unit)
*/
units.atmNM = 1.01 * Math.pow(10, 5);
units.atmNMUnit = "Nm^-2";

/*
* Atmosphere Unit (Pascal)
* The standard atmosphere (symbol: atm) is an international reference pressure defined as 101325 Pa and formerly used as a unit of pressure.
* https://en.wikipedia.org/wiki/Atmosphere_(unit)
*/
units.atmPa = 101 * Math.pow(10, 3);
units.atmPaUnit = "Pa";

/*
* Atmosphere Unit (HG unit of pressure)
* The standard atmosphere (symbol: atm) is an international reference pressure defined as 101325 Pa and formerly used as a unit of pressure.
* https://en.wikipedia.org/wiki/Atmosphere_(unit)
*/
units.atmHG = 760;
units.atmHGUnit = "mmHg";