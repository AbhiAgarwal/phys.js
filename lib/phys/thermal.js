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
 * (9 functions)
 */

var constant = require('./constants/constants');
var units = require('./constants/units');
var multiplier = require('./constants/multiplier');
var basic = require('./basic');
var thermal = exports;

// Pressure
// 
// thermal.pressure(Force, Area)
/*
@param {Number} Force (f)
@param {Number} Area (a)
@return {Number} Pressure = Force / Area
*/

thermal.pressure = function (f, a, callback) {
  var ans = (f / a);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Heat
// 
// thermal.heat(Mass, Specific Heat Capacity, Temperature One, Temperature Two)
/*
@param {Number} Mass (m)
@param {Number} Specific Heat Capacity (shc)
@param {Number} Temperature One (t1)
@param {Number} Temperature Two (t2)
@return {Number} Q = m * c * (t2 - t1)
*/

thermal.heat = function (m, shc, t1, t2, callback) {
  var ans = (m * shc * basic.changein(t1, t2));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Heat
// 
// thermal.selfheat(Mass, Specific Heat Capacity, Change in Temperature)
// 
// Inputting the Change in Temperature Yourself
/*
@param {Number} Mass (m)
@param {Number} Specific Heat Capacity (shc)
@param {Number} Change in Temperature (t)
@return {Number} Q = m * c * t
*/

thermal.selfheat = function (m, shc, t, callback) {
  var ans = (m * shc * t);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Latent Heat of Vaporization or Fusion
// 
// thermal.latentHeat(Mass, V or F (Vaporization or Fusion))
/*
@param {Number} Mass (m)
@param {Number} V or F (Vaporization or Fusion) (l)
@return {Number} Q = Mass * Latent Heat of Fusion or Vaporization
*/

thermal.latentHeat = function (m, l, callback) {
  var ans = (m * l);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// The Ideal Gas Equation
// 
// thermal.idealGasPV(Number of moles, Temperature)
/*
@param {Number} Number of moles (n)
@param {Number} The temperature, Kelvin (t)
@return {Number} P * V = n * r * t
*/

thermal.idealGasPV = function (n, t, callback) {
  var ans = (n * (constant.GasConstant) * t);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Thermodynamics Work Equation
// 
// thermal.work(Pressure, Initial Volume, Final Volume)
/*
@param {Number} Pressure (p)
@param {Number} Initial Volume (v1)
@param {Number} Final Volume (v2)
@return {Number} W = P * (v2 - v1)
*/

thermal.work = function (p, v1, v2, callback) {
  var ans = (p * basic.changein(v1, v2));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Thermodynamics Work Equation
// 
// thermal.selfwork(Pressure, Volume)
/*
@param {Number} Pressure (p)
@param {Number} Volume (v)
@return {Number} W = P * V (Already change in Volume)
*/

thermal.selfwork = function (p, v, callback) {
  var ans = (p * v);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Heat Relation Equation
// 
// thermal.heatChange(Initial Energy Change, Final Energy Change, Work Done)
/*
@param {Number} Work Done (w)
@param {Number} Initial Energy Change (u1)
@param {Number} Final Energy Change (u2)
@return {Number} Q = (Change in) U + W
*/

thermal.heatChange = function (u1, u2, w, callback) {
  var ans = (basic.changein(u1, u2) + w);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Heat Relation Equation
// 
// thermal.selfheatChange(Internal Energy Change, Work Done)
/*
@param {Number} Work Done (w)
@param {Number} Internal Energy Change (u)
@return {Number} Q = U + W
*/

thermal.selfheatChange = function (u, w, callback) {
  var ans = (u + w);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};