/**
* fields.js
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
fields = exports;

/*
* Gravitational Force
@param {Number} Gravitation (G) - Constant
@param {Number} Mass One (mone)
@param {Number} Mass Two (mtwo)
@param {Number} radius^2 (r^2)
@return {Number} Force = G * ((mone * mtwo) / r^2)
*/

fields.gravitationalForce = function(mone, mtwo, r){
	return (constant.GravitationalConstant * ((mone * mtwo) / r));
};

/*
* Calculated Gravitational Force
@param {Number} Gravitation (G) - Constant
@param {Number} Mass of First Object (mone)
@param {Number} Mass of Second Object (mtwo)
@param {Number} radius (r)
@return {Number} Force = G * ((mone * mtwo) / r^2)
*/

fields.cGravitationalForce = function(mone, mtwo, r){
	return (constant.GravitationalConstant * ((mone * mtwo) / (Math.pow(r, 2))));
};

/*
* Coulomb's Law
@param {Number} Coulomb constant (k) - Constant
@param {Number} Charge of First Object (qone)
@param {Number} Charge of Second Object (qtwo)
@param {Number} radius^2 (r^2)
@return {Number} Force = k * ((qone * qtwo) / r^2)
*/

fields.CoulombForce = function(qone, qtwo, r){
	return (constant.CoulombConstant * ((qone * qtwo) / r));
};

/*
* Calculated Coulomb's Law
@param {Number} Coulomb constant (k) - Constant
@param {Number} Charge of First Object (qone)
@param {Number} Charge of Second Object (qtwo)
@param {Number} radius (r)
@return {Number} Force = k * ((qone * qtwo) / r^2)
*/

fields.cCoulombForce = function(qone, qtwo, r){
	return (constant.CoulombConstant * ((qone * qtwo) / Math.pow(r, 2)));
};

/*
* Acceleration (Gravity)
@param {Number} Force (F)
@param {Number} mass (m)
@return {Number} Acceleration = F / m
*/

fields.gravitationalAcceleration = function(F, m){
	return (F / m);
};

/*
* Electric Field
@param {Number} Force (F)
@param {Number} Charge (q)
@return {Number} Electric Field = F / q
*/

fields.electricField = function(F, q){
	return (F / q);
};