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
 * (9 functions)
 */

var constant = require('./constants/constants');
var units = require('./constants/units');
var multiplier = require('./constants/multiplier');
var basic = require('./basic');
var quantum = exports;

// Energy
//
// quantum.energy(Mass)
/*
@param {Number} Mass
@return {Number} E = m * c^2
*/

quantum.energy = function (mass) {
  var ans = Math.pow(constant.SpeedofLightVacuum, 2) * mass;
  return ans;
};

// Energy of a quanta of light
//
// quantum.energyLight(Frequency)
/*
@param {Number} Frequency (f)
@return {Number} E = hf
*/

quantum.energyLight = function (f) {
  var ans = constant.PlancksConstant * f;
  return ans;
};

// Momentum of quanta
//
// quantum.momentum(Wavelength)
/*
@param {Number} Wavelength (waveLen)
@return {Number} p = h / waveLen
*/

quantum.momentum = function (waveLen) {
  var ans = constant.PlancksConstant / waveLen;
  return ans;
};

// De Broglie wavelength
//
// quantum.deBroglie(Momentum)
/*
@param {Number} Momentum (p)
@return {Number} waveLen = h / p
*/

quantum.deBroglie = function (p) {
  var ans = constant.PlancksConstant / p;
  return ans;
};

// Lower-bound to uncertainty in position
//
// quantum.uncPosition(Uncertainty in momentum)
/*
@param {Number} Uncertainty in momentum (dMomentum)
@return {Number} dPosition >= (h / 4pi) * (1 / dMomentum)
*/

quantum.uncPosition = function (dMomentum) {
  var ans = constant.PlancksConstant / (4 * Math.PI * dMomentum);
  return ans;
};

// Lower-bound to uncertainty in momentum
//
// quantum.uncMomentum(Uncertainty in position)
/*
@param {Number} Uncertainty in position (dPosition)
@return {Number} dMomentum >= (h / 4pi) * (1 / dPosition)
*/

quantum.uncMomentum = function (dPosition) {
  var ans = constant.PlancksConstant / (4 * Math.PI * dPosition);
  return ans;
};

// Maximum kinetic energy of emitted electrons incident with a frequency f upon a metal with a work function W
//
// quantum.maxKineticEnergy(Work function, Frequency)
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
//
// quantum.minWork(Threshold frequency)
/*
@param {Number} Threshold frequency (f0)
@return {Number} W = hf_0
*/

quantum.minWork = function (f0) {
  var ans = constant.PlancksConstant * f0;
  return ans;
};

// Minimum frequency required to induce photoelectric effect
//
// quantum.thresholdFreq(Work)
/*
@param {Number} W
@return {Number} f_0 = W / h
*/

quantum.thresholdFreq = function (W) {
  var ans = W / constant.PlancksConstant;
  return ans;
};

// Electron In a Box: Energy Levels
//
// quantum.energyLevels(Mass, Width of the well, State with quantum number)
/*
@param {Number} Mass
@param {Number} L: is the width of the well
@param {Number} n: State with quantum number
@return {Number} Energy Levels = (State with quantum number^2 * Plancks Constant^2) / (8 * Mass * Width of the well^2)
*/

quantum.energyLevels = function (n, m, l) {
  var ans = (Math.pow(n, 2) * Math.pow(constant.PlancksConstant, 2))/(8 * m * Math.pow(l, 2));
  return ans;
};

// Rates of Radioactive Decay
//
// quantum.decay(Number of atoms, Decays per unit time, Time)
/*
@param {Number} Number of atoms
@param {Number} Decays per unit time as a constant fraction
@param {Number} Time
@return {Number} Number of atoms decayed = Number of atoms * e ^ (- Decays per unit time is a constant fraction * Time)
*/

quantum.decay = function (n, lambd, time) {
  var ans = n * Math.pow(Math.E, (-1 * lambd * time));
  return ans;
};

// Half Life
//
// quantum.halflife(Decay Constant)
/*
@param {Number} lambda: Decay Constant
@return {Number} T(1/2) = ln(2)/(Decay Constant)
*/

quantum.halflife = function (lambd) {
  var ans = (Math.log(2))/(lambd);
  return ans;
};

// Activity, in number of counts per second
//
// quantum.activity(Number of atoms, Decay Constant)
/*
@param {Number} N: Number of atoms decayed
@param {Number} lambda: Decay Constant
@return {Number} Activity = lambda * Number of Atoms Decayed
*/

quantum.activity = function (N, L) {
  var ans = N * L;
  return ans;
};

// Activity, in number of counts per second
//
// quantum.activityE(Number of atoms, Decay Constant, Time)
/*
@param {Number} N: Number of atoms
@param {Number} lambda: Decay Constant
@return {Number} A = Decay Constant * (Number of atoms * e ^ (- Decays per unit time is a constant fraction * Time))
@return {Number} or A = Decay Constant * Number of atoms decayed
*/

quantum.activityE = function (N, L, t) {
  var ans = L * quantum.decay(N, L, t);
  return ans;
};
