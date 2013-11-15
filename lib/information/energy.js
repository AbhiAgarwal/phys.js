/**
* information.energy.js
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
* (0 functions)
*/

var ienergy = exports;

ienergy.power = function(){
	return ("Power\n" +
			"Inputs: Area, Density, Wind speed\n" +
			"Power = 1/2 * (Area * Density * (Wind Speed)^3)" 
	);
};

ienergy.selfpower = function(){
	return ("Calculated Power\n" +
			"Inputs: Area, Density, Wind speed^3\n" +
			"You've to input the (Wind Speed)^3 Yourself\n" +
			"Power = 1/2 * (Area * Density * (Wind Speed))" 
	);
};

ienergy.powerLength = function(){
	return ("Power per Unit Length\n" +
			"Inputs: Area, Density, Wind speed\n" +
			"Power per Unit Length = Area^2 * Density * Gravitational Constant * Wind speed" 
	);
};

ienergy.selfpowerLength = function(){
	return ("Calculated Power per Unit Length\n" +
			"Inputs: Area, Density, Gravitational Constant, Wind speed^3\n" +
			"You've to input the (Wind Speed)^3, and Gravitational Constant Yourself\n" +
			"Power per Unit Length = Area * Density * Gravitational Constant * Wind speed" 
	);
};

ienergy.intensity = function(){
	return ("Intensity\n" +
			"Inputs: Power, Area\n" +
			"Intensity = Power / Area" 
	);
};

ienergy.albedo = function(){
	return ("Albedo\n" +
			"Inputs: Total Scattered Power, Total Incident Power\n" +
			"Albedo = Total Scattered Power / Total Incident Power" 
	);
};

ienergy.transfersurface = function(){
	return ("Total information.energy Transfer\n" +
			"Inputs: Surface Heat Capacity, Area, Initial Time, Final time\n" +
			"Total information.energy Transfer = Surface Heat Capacity * Area * (Final time - Initial Time)" 
	);
};

ienergy.surfaceheat = function(){
	return ("Surface Heat Capacity\n" +
			"Inputs: Total information.energy Transfer as Heat, Area, Initial Time, Final time\n" +
			"Surface Heat Capacity = (Total information.energy Transfer) / (Area * (Final Time - Initial Time))" 
	);
};