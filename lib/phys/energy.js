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
 * (2 functions)
 */

var constant = require('./constants/constants');
var units = require('./constants/units');
var multiplier = require('./constants/multiplier');
var basic = require('./basic');
var energy = exports;

// Power
// 
// energy.power(Area, Density, Velocity)
/*
@param {Number} Area (of wind turbine blindes)
@param {Number} p - density of air or 1.255 kg/m cubed
@param {Number} v - wind speed in m/s
@return {Number} power = 1/2 * (A * p * v^3)
*/

energy.power = function (A, p, v) {
  var ans = (1/2) * (A * p * Math.pow(v, 3));
  return ans;
};

// Calculated Power
// 
// energy.selfpower(Area, Density, Velocity^3)
// 
// Inputting the Velocity^3 Yourself
/*
@param {Number} Area (of wind turbine blindes)
@param {Number} p - density of air or 1.255 kg/m cubed
@param {Number} v - wind speed in m/s
@return {Number} power = 1/2 * (A * p * v^3)
*/

energy.selfpower = function (A, p, v) {
  var ans = (1/2) * (A * p * v);
  return ans;
};

// Power per Unit Length
// 
// energy.powerlength(Area, Density, Wind Speed)
/*
@param {Number} Area (of wind turbine blindes)
@param {Number} p - density of air or 1.255 kg/m cubed
@param {Number} v - Wind speed in m/s
@return {Number} Power per Unit Length = Area^2 * Density * Gravitational Constant * Wind speed
*/

energy.powerLength = function (A, p, v) {
  var ans = (1/2) * (Math.pow(A, 2) * p * constant.gAcceleration * v);
  return ans;
};

// Calculated Power per Unit Length
// 
// energy.selfpowerLength(Area^2, Density, Gravitational Constant, Wind Speed)
// 
// Inputting the Area^2 and Gravity Yourself
/*
@param {Number} Area (of wind turbine blindes)
@param {Number} p - density of air or 1.255 kg/m cubed
@param {Number} g - Gravity
@param {Number} v - Wind speed in m/s
@return {Number} Power per Unit Length = Area * Density * g * Wind speed
*/

energy.selfpowerLength = function (A, p, g, v) {
  var ans = (1/2) * (A * p * g * v);
  return ans;
};

// Intensity
// 
// energy.intensity(Power, Area)
/*
@param {Number} P - Power
@param {Number} A - Area
@return {Number} Intensity = Power / Area
*/

energy.intensity = function (P, A) {
  var ans = (P / A);
  return ans;
};

// Albedo
// 
// energy.albedo(Total Scattered Power, Total Incident Power)
/*
@param {Number} S - Total Scattered Power
@param {Number} I - Total Incident Power
@return {Number} Albedo = Total Scattered Power / Total Incident Power
*/

energy.albedo = function (S, I) {
  var ans = (S / I);
  return ans;
};

// Total Energy Transfer
// 
// energy.transfersurface(Surface Heat Capacity, Area, Initial Time, Final Time)
/*
@param {Number} SHC - Surface Heat Capacity
@param {Number} A - Area
@param {Number} t1 - Initial Time
@param {Number} t2 - Final time
@return {Number} Total Energy Transfer = Surface Heat Capacity * Area * (Final time - Initial Time)
*/

energy.transfersurface = function(SHC, A, t1, t2) {
  var ans = SHC * A * basic.changein(t1, t2);
  return ans;
};

// Surface Heat Capacity
// 
// energy.surfaceheat(Total Energy Transfer, Area, Initial Time, Final Time)
/*
@param {Number} Q - Total Energy Transfer as Heat
@param {Number} A - Area
@param {Number} t1 - Initial Time
@param {Number} t2 - Final time
@return {Number} Surface Heat Capacity = (Total Energy Transfer) / (Area * (Final Time - Initial Time))
*/

energy.surfaceheat = function(Q, A, t1, t2) {
  var ans = (Q) / (A * basic.changein(t1, t2));
  return ans;
};