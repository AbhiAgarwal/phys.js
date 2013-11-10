/**
 * quantum.js
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
var quantum = exports;

// Energy
/*
@param {Number} Mass
@return {Number} E = m * c^2
*/

quantum.energy = function (mass) {
  var ans = Math.pow(constant.SpeedofLightVacuum, 2) * mass;
  return ans;
};

// Energy of a quanta of light
/* 
@param {Number} Frequency (f)
@return {Number} E = hf
*/

quantum.energyLight = function (f) {
  var ans = constant.PlancksConstant * f;
  return ans;
};

// Momentum of quanta
/*
@param {Number} Wavelength (waveLen)
@return {Number} p = h / waveLen
*/

quantum.momentum = function (waveLen) {
  var ans = constant.PlancksConstant / waveLen;
  return ans;
};

// De Broglie wavelength
/*
@param {Number} Momentum (p)
@return {Number} waveLen = h / p
*/

quantum.deBroglie = function (p) {
  var ans = constant.PlancksConstant / p;
  return ans;
};

// Lower-bound to uncertainty in position
/*
@param {Number} Uncertainty in momentum (dMomentum)
@return {Number} dPosition >= (h / 4pi) * (1 / dMomentum)
*/

quantum.uncPosition = function (dMomentum) {
  var ans = constant.PlancksConstant / (4 * Math.PI * dMomentum);
  return ans;
};

// Lower-bound to uncertainty in momentum
/*
@param {Number} Uncertainty in position (dPosition)
@return {Number} dMomentum >= (h / 4pi) * (1 / dPosition)
*/

quantum.uncMomentum = function (dPosition) {
  var ans = constant.PlancksConstant / (4 * Math.PI * dPosition);
  return ans;
};

// Maximum kinetic energy of emitted electrons incident with a frequency f upon a metal with a work function W
/*
@param {Number} Work function (in Joules) (W)
@param {Number} Frequency (f)
@return {Number} K = hf - W
*/

quantum.maxKineticEnergy = function (W, f) {
  var ans = constant.PlancksConstant * f - W;
  return ans;
};

// Minimum energy required to delocalize an electron from the surface of a metal
/*
@param {Number} Threshold frequency (f0)
@return {Number} W = hf_0
*/

quantum.minWork = function (f0) {
  var ans = constant.PlancksConstant * f0;
  return ans;
};

// Minimum frequency required to induce photoelectric effect
/*
@param {Number} W
@return {Number} f_0 = W / h;
*/

quantum.thresholdFreq = function (W) {
  var ans = W / constant.PlancksConstant;
  return ans;
};