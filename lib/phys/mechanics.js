/**
* mechanics.js
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

var constant = require('./constants/constants');
var units = require('./constants/units');
var multiplier = require('./constants/multiplier');
var basic = require('./basic')

var mechanics = exports;

/*
* Momentum
@param {Number} Mass (m)
@param {Number} Velocity (v)
@return {Number} Momentum = Mass * Velocity
*/

mechanics.momentum = function(m, v) {
	return (m * v);
};

/*
* Force
@param {Number} Mass (m)
@return {Number} Force = Mass * Acceleration
*/

mechanics.force = function(m) {
	return (m * gAcceleration);
};

/*
* Force (Own Acceleration Input)
@param {Number} Mass (m)
@param {Number} Acceleration (g)
@return {Number} Force = Mass * Acceleration
*/

mechanics.cforce = function(m, g) {
	return (m * g);
};

/*
* Force (Momentum over Time)
@param {Number} Change in Momentum (p1, p2)
@param {Number} Change in Time (t1, t2)
@return {Number} Force = Change in Momentum / Change in Time
*/

mechanics.forceMomentum = function(p1, p2, t1, t2){
	return ((basic.changein(p1, p2)) / (basic.changein(t1, t2)));
};

/*
* Force (Calculated Momentum over Time)
@param {Number} Change in Momentum (p1, p2)
@param {Number} Change in Time (t1, t2)
@return {Number} Force = Change in Momentum / Change in Time
*/

mechanics.cforceMomentum = function(m1, v1, m2, v2, t1, t2){
	return ((basic.changein((mechanics.momentum(m1, v1)), mechanics.momentum(m2, v2))) / (basic.changein(t1, t2)));
};

/*
* SUVAT Displacement (Using u, t, a)
@param {Number} Initial Velocity (u)
@param {Number} Time (t)
@param {Number} Acceleration (a)
@return {Number} s = u * t + 1/2 * a * t^2
*/

mechanics.MVDisplacement1 = function(u, t, a){
	return ((u * t) + ((1 / 2) * a * (Math.pow(t, 2))));
};

/*
* SUVAT Displacement (using u, v, t)
@param {Number} Initial Velocity (u)
@param {Number} Final Velocity (v)
@param {Number} Time (t)
@return {Number}  s = 1 / 2 * (u + v) * t
*/

mechanics.MVDisplacement2 = function(u, v, t){
	return ((1 / 2) * ((u + v) * t));
};

/*
* SUVAT Displacement (using u, v, t)
@param {Number} Acceleration (a)
@param {Number} Final Velocity (v)
@param {Number} Time (t)
@return {Number}  s = v * t - 1/2 * a * t^2
*/

mechanics.MVDisplacement3 = function(v, t, a){
	return ((v * t) - ((1/2) * a * (Math.pow(t, 2))));
};

