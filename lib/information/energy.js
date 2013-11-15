/**
* energy.js
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

energy = exports;

energy.power = function(){
	return ("Power\n" +
			"Inputs: Area, Density, Wind speed\n" +
			"Power = 1/2 * (Area * Density * (Wind Speed)^3)" 
	);
};

energy.selfpower = function(){
	return ("Calculated Power\n" +
			"Inputs: Area, Density, Wind speed^3\n" +
			"You've to input the (Wind Speed)^3 Yourself\n" +
			"Power = 1/2 * (Area * Density * (Wind Speed))" 
	);
};

energy.powerLength = function(){
	return ("Power per Unit Length\n" +
			"Inputs: Area, Density, Wind speed\n" +
			"Power per Unit Length = Area^2 * Density * Gravitational Constant * Wind speed" 
	);
};

energy.selfpowerLength = function(){
	return ("Calculated Power per Unit Length\n" +
			"Inputs: Area, Density, Gravitational Constant, Wind speed^3\n" +
			"You've to input the (Wind Speed)^3, and Gravitational Constant Yourself\n" +
			"Power per Unit Length = Area * Density * Gravitational Constant * Wind speed" 
	);
};

energy.intensity = function(){
	return ("Intensity\n" +
			"Inputs: Power, Area\n" +
			"Intensity = Power / Area" 
	);
};

energy.albedo = function(){
	return ("Albedo\n" +
			"Inputs: Total Scattered Power, Total Incident Power\n" +
			"Albedo = Total Scattered Power / Total Incident Power" 
	);
};

energy.transfersurface = function(){
	return ("Total Energy Transfer\n" +
			"Inputs: Surface Heat Capacity, Area, Initial Time, Final time\n" +
			"Total Energy Transfer = Surface Heat Capacity * Area * (Final time - Initial Time)" 
	);
};

energy.surfaceheat = function(){
	return ("Surface Heat Capacity\n" +
			"Inputs: Total Energy Transfer as Heat, Area, Initial Time, Final time\n" +
			"Surface Heat Capacity = (Total Energy Transfer) / (Area * (Final Time - Initial Time))" 
	);
};