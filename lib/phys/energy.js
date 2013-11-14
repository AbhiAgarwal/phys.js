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
 */

var constant = require('./constants/constants');
var units = require('./constants/units');
var multiplier = require('./constants/multiplier');
var basic = require('./basic');
var energy = exports;

// Calculated Power
/*
@param {Number} Area (of wind turbine blindes)
@param {Number} p - density of air or 1.255 kg/m cubed
@param {Number} v - wind speed in m/s
@return {Number} power = 1/2 * (A * p * v^3)
*/

electromagnetic.power = function (A, p, v) {
  var ans = (1/2) * (A * p * Math.pow(v, 3));
  return ans;
};

// Power
/*
@param {Number} Area (of wind turbine blindes)
@param {Number} p - density of air or 1.255 kg/m cubed
@param {Number} v - wind speed in m/s
@return {Number} power = 1/2 * (A * p * v^3)
*/

electromagnetic.selfPower = function (A, p, v) {
  var ans = (1/2) * (A * p * v);
  return ans;
};
