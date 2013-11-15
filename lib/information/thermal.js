/**
* information.thermal.js
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
* (9 functions)
*/

var ithermal = exports;

ithermal.pressure = function(){
	return ("Pressure Equation\n" +
			"Inputs are: Force, Area\n" +
			"Pressure = Force / Area"
	);
};

ithermal.heat = function(){
	return ("Calculated Heat Equation\n" +
			"Inputs are: Mass, Specific Heat Capacity, Initial Time, Final Time\n" +
			"Heat = Mass * Specific Heat Capacity, (Final Time - Initial Time)"
	);
};

ithermal.selfheat = function(){
	return ("Heat Equation\n" +
			"Inputs are: Mass, Specific Heat Capacity, Change in Temperature\n" +
			"Heat = Mass * Specific Heat Capacity, Change in Temperature"
	);
};

ithermal.latentHeat = function(){
	return ("Latent Heat Equation\n" +
			"Inputs are: Mass, Latent Heat of Fusion or Vaporization\n" +
			"Heat = Mass * Latent Heat of Fusion or Vaporization"
	);
};

ithermal.idealGasPV = function(){
	return ("Ideal Gas Equation\n" +
			"Inputs are: Number of Moles, Temperature\n" +
			"Pressure * Volume = Number of Moles * Gas Constant * Time"
	);
};

ithermal.work = function(){
	return ("Calculated Work Done Equation\n" +
			"Inputs are: Pressure, Initial Volume, Final Volume\n" +
			"Work = Pressure * (Final Volume - Initial Volume)"
	);
};

ithermal.selfwork = function(){
	return ("Work Done Equation\n" +
			"Inputs are: Pressure, Volume\n" +
			"Work = Pressure * Volume"
	);
};

ithermal.heatChange = function(){
	return ("Calculated Heat Change Equation\n" +
			"Inputs are: Work Done, Initial Energy Change, Final Energy Change\n" +
			"Heat = (Final Energy Change - Initial Energy Change) * Work Done"
	);
};

ithermal.selfheatChange = function(){
	return ("Heat Change Equation\n" +
			"Inputs are: Work Done, Internal Energy Change\n" +
			"Heat = Change in Energy Change * Work Done"
	);
};