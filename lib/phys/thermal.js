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

var constant = require('./constants/constants'),
units = require('./constants/units'),
multiplier = require('./constants/multiplier'),
basic = require('./basic'),
thermal = exports;

/*
* Pressure
@param {Number} Force (f)
@param {Number} Area (a)
@return {Number} Pressure = Force / Area
*/

thermal.pressure = function(f, a){
	return (f / a);
};

/*
* Heat
@param {Number} Mass (m)
@param {Number} Specific Heat Capacity (shc)
@param {Number} Change in Temperature (t)
@return {Number} Q = m * c * t
*/

thermal.heat = function(m, shc, t){
	return (m * shc * t);
};

/*
* Calculated Heat
@param {Number} Mass (m)
@param {Number} Specific Heat Capacity (shc)
@param {Number} Temperature One (t1)
@param {Number} Temperature Two (t2)
@return {Number} Q = m * c * (t2 - t1)
*/

thermal.cHeat = function(m, shc, t1, t2){
	return (m * shc * basic.changein(t1, t2));
};


/*
* Latent Heat of Vaporization or Fusion
@param {Number} Mass (m)
@param {Number} V or F (Vaporization or Fusion) (l)
@return {Number} Q = Mass * Latent Heat of Fusion or Vaporization
*/

thermal.latentHeat = function(m, l){
	return (m * l);
};

/*
* The Ideal Gas Equation
@param {Number} Number of moles (n)
@param {Number} The temperature, Kelvin (t)
@return {Number} P * V = n * r * t
*/

thermal.idealGasPV = function(n, t){
	return (n * (constant.GasConstant) * t);
};

/*
* Thermodynamics Work Equation
@param {Number} Pressure (p)
@param {Number} Volume (v)
@return {Number} W = P * V (Already change in Volume)
*/

thermal.work = function(p, v){
	return (p * v);
};

/*
* Calculated Thermodynamics Work Equation
@param {Number} Pressure (p)
@param {Number} Initial Volume (v1)
@param {Number} Final Volume (v2)
@return {Number} W = P * (v2 - v1)
*/

thermal.cWork = function(p, v1, v2){
	return (p * basic.changein(v1, v2));
};

/*
* Heat Relation Equation
@param {Number} Work Done (w)
@param {Number} Internal Energy Change (u)
@return {Number} Q = U * W
*/

thermal.heatChange = function(u, w){
	return (u + w);
};

/*
* Calculated Heat Relation Equation
@param {Number} Work Done (w)
@param {Number} Initial Energy Change (u1)
@param {Number} Final Energy Change (u2)
@return {Number} Q = (Change in) U * W
*/

thermal.cHeatChange = function(u1, u2, w){
	return (basic.changein(u1, u2) + w);
};