/**
* thermal.js
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

thermal = exports;

/*
* Pressure
@param {Number} Force (f)
@param {Number} Area (a)
@return {Number} Pressure = Force / Area
*/

thermal.pressure = function(){
	return ("Pressure Equation\n" +
			"Inputs are: Force, Area\n" +
			"Pressure = Force / Area"
	);
};

/*
* Heat
@param {Number} Mass (m)
@param {Number} Specific Heat Capacity (shc)
@param {Number} Change in Temperature (t)
@return {Number} Q = m * c * t
*/

thermal.heat = function(){
	return ("Heat Equation\n" +
			"Inputs are: Mass, Specific Heat Capacity, Change in Temperature\n" +
			"Heat = Mass * Specific Heat Capacity, Change in Temperature"
	);
};

/*
* Calculated Heat
@param {Number} Mass (m)
@param {Number} Specific Heat Capacity (shc)
@param {Number} Temperature One (t1)
@param {Number} Temperature Two (t2)
@return {Number} Q = m * c * (t2 - t1)
*/

thermal.cHeat = function(){
	return ("Calculated Heat Equation\n" +
			"Inputs are: Mass, Specific Heat Capacity, Initial Time, Final Time\n" +
			"Heat = Mass * Specific Heat Capacity, (Final Time - Initial Time)"
	);
};

/*
* Latent Heat of Vaporization or Fusion
@param {Number} Mass (m)
@param {Number} V or F (Vaporization or Fusion) (l)
@return {Number} Q = Mass * Latent Heat of Fusion or Vaporization
*/

thermal.latentHeat = function(){
	return ("Latent Heat Equation\n" +
			"Inputs are: Mass, Latent Heat of Fusion or Vaporization\n" +
			"Heat = Mass * Latent Heat of Fusion or Vaporization"
	);
};

/*
* The Ideal Gas Equation
@param {Number} Number of moles (n)
@param {Number} The temperature in Kelvin (t)
@return {Number} P * V = n * r * t
*/

thermal.idealGasPV = function(){
	return ("Ideal Gas Equation\n" +
			"Inputs are: Number of Moles, Temperature\n" +
			"Pressure * Volume = Number of Moles * Gas Constant * Time"
	);
};

/*
* Thermodynamics Work Equation
@param {Number} Pressure (p)
@param {Number} Volume (v)
@return {Number} W = P * V (Already change in Volume)
*/

thermal.work = function(){
	return ("Work Done Equation\n" +
			"Inputs are: Pressure, Volume\n" +
			"Work = Pressure * Volume"
	);
};

/*
* Calculated Thermodynamics Work Equation
@param {Number} Pressure (p)
@param {Number} Initial Volume (v1)
@param {Number} Final Volume (v2)
@return {Number} W = P * (v2 - v1)
*/

thermal.cWork = function(){
	return ("Calculated Work Done Equation\n" +
			"Inputs are: Pressure, Initial Volume, Final Volume\n" +
			"Work = Pressure * (Final Volume - Initial Volume)"
	);
};

/*
* Heat Relation Equation
@param {Number} Work Done (W)
@param {Number} Internal Energy Change (U)
@return {Number} Q = (Change in) U * W
*/

thermal.heatChange = function(){
	return ("Heat Change Equation\n" +
			"Inputs are: Work Done, Internal Energy Change\n" +
			"Heat = Change in Energy Change * Work Done"
	);
};

/*
* Calculated Heat Relation Equation
@param {Number} Work Done (W)
@param {Number} Internal Energy Change (U)
@return {Number} Q = (Change in) U * W
*/

thermal.cHeatChange = function(){
	return ("Calculated Heat Change Equation\n" +
			"Inputs are: Work Done, Initial Energy Change, Final Energy Change\n" +
			"Heat = (Final Energy Change - Initial Energy Change) * Work Done"
	);
};