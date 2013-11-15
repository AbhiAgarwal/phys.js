/**
 * wave.js
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
 * (13 functions)
 */

var constant = require('./constants/constants');
var units = require('./constants/units');
var multiplier = require('./constants/multiplier');
var basic = require('./basic');
var wave = exports;

// Angular Frequency (w) Function
// 
// wave.angularFrequency(Time)
/*
@param {Number} Time (T)
@var ans = {Number} w = 2 pi / T
*/

wave.angularFrequency = function (T, callback) {
  var ans = (2 * Math.PI) / (T);
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Displacement (x) of a particle from an arbitrarily 
// defined equilibrium point at time = t
// 
// wave.displacement(Amplitude of oscillation, Angular frequency, Time)
/*
@param {Number} Amplitude of oscillation (A)
@param {Number} Angular frequency (ω)
@param {Number} Time (t)
@var ans = {Number} x(t) = A * sin(ω*t)
*/

wave.displacement = function (A, w, t, callback) {
  var ans = (A * Math.sin(w * t));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Velocity (v) of a particle from an arbitrarily 
// defined equilibrium point at time = t
// 
// wave.velocity(Angular frequency, Amplitude of oscillation, Time)
/*
@param {Number} Angular frequency (ω)
@param {Number} Amplitude of oscillation (A)
@param {Number} Time (t)
@var ans = {Number} v(t) = ω * A * cos(ω*t)
*/

wave.velocity = function (w, A, t, callback) {
  var ans = (w * A * Math.cos(w * t));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Acceleration (a) of a particle from an arbitrarily 
// defined equilibrium point at time = t
// 
// wave.acceleration(Angular frequency, Amplitude of oscillation, Time)
/*
@param {Number} Angular frequency (ω)
@param {Number} Amplitude of oscillation (A)
@param {Number} Time (t)
@var ans = {Number} a(t) = -ω^2 * A * sin(ω*t)
*/

wave.acceleration = function (w, A, t, callback) {
  var ans = (Math.pow((-1 * w), 2) * A * Math.sin(w * t));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Kinetic energy (K) of a particle undergoing 
// simple harmonic motion
// 
// wave.kineticEnergy(Mass of particle, Angular frequency, Amplitude of oscillation, Displacement from equilibrium point)
/*
@param {Number} Mass of particle (m)
@param {Number} Angular frequency (ω)
@param {Number} Amplitude of oscillation (A)
@param {Number} Displacement from equilibrium point (x)
@var ans = {Number} K = 0.5 * m * ω^2 * (A^2 - x^2)
*/

wave.kineticEnergy = function (m, w, A, x, callback) {
  var ans = (0.5 * m * Math.pow(w, 2) * ((Math.pow(A, 2)) - (Math.pow(x, 2))));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Potential energy (U) of a particle undergoing 
// simple harmonic motion
// 
// wave.potentialEnergy(Mass of particle, Angular frequency, Displacement from equilibrium point)
/*
@param {Number} Mass of particle (m)
@param {Number} Angular frequency (ω)
@param {Number} Displacement from equilibrium point (x)
@var ans = {Number} P = 0.5 * m * ω^2 * x^2
*/

wave.potentialEnergy = function (m, w, x, callback) {
  var ans = (0.5 * m * Math.pow(w, 2) * Math.pow(x, 2));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Total energy (E) of a particle undergoing simple harmonic motion
// 
// wave.netEnergy(Mass of particle, Angular frequency, Amplitude of oscillation)
/*
@param {Number} Mass of particle (m)
@param {Number} Angular frequency (ω)
@param {Number} Amplitude of oscillation (A)
@var ans = {Number} E = 0.5 * m * ω^2 * A^2 
*/

wave.netEnergy = function (m, w, A, callback) {
  var ans = (0.5 * m * Math.pow(w, 2) * Math.pow(A, 2));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Wave Speed (v) Function
// 
// wave.waveSpeed(Frequency, Wavelength)
/*
@param {Number} Frequency (f)
@param {Number} Wavelength (λ)
@var ans = {Number} v = f * λ
*/

wave.waveSpeed = function (frequency, wavelength, callback) {
  var ans = (frequency * wavelength);
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Refractive Index of an unknown material
// 
// wave.refractiveIndex(Wave speed Known, Wave speed Unknown, Refractive Index Known)
/*
@param {Number} Wave speed in known medium (v1)
@param {Number} Wave speed in unknown medium (v2)
@param {Number} Refractive Index of known medium (n)
@var ans = {Number} n2 = (n1 * v1) / v2
*/

wave.refractiveIndex = function (v1, v2, n1, callback) {
  var ans = ((n1 * v1) / v2);
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Minimum angular resolution (in rads) required to 
// distinguish two bodies or a measure of image quality
// 
// wave.angularResolution(Wavelength, Diameter of aperature)
/*
*
@param {Number} Wavelength (λ) of incident light
@param {Number} Diameter of aperature (d)
@var ans = {Number} θ = 1.22 * (λ / d)
*/

wave.angularResolution = function (wavelength, d, callback) {
  var ans = (1.22 * (wavelength / d));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Acoustic beat frequency of two waves
// 
// wave.beatFrequency(Frequency of first wave, Frequency of second wave)
/*
@param {Number} Frequency of first wave (f1)
@param {Number} Frequency of second wave (f2)
@var ans = {Number} b = |f2 - f1|
*/

wave.beatFrequency = function (f1, f2, callback) {
  var ans = (Math.abs(f2 - f1));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Wavelength of the nth harmonic
// 
// wave.harmonicLen(Length of string, Nth harmonic)
/*
@param {Number} Length of string (L)
@param {Numberr} Nth harmonic (n)
@var ans = {Number} λ = 2L / n
*/

wave.harmonicLen = function (L, n, callback) {
  var ans = ((2 * L) / n);
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Frequency of the nth harmonic
// 
// wave.harmonicFreq(Wave speed, Length of string, Nth harmonic)
/*
@param {Number} Wave speed (v)
@param {Number} Length of string (L)
@param {Numberr} Nth harmonic (n)
@var ans = {Number} f = v / (2L / n)
*/

wave.harmonicFreq = function (v, L, n, callback) {
  var ans = (v / wave.harmonicLen(L, n));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};