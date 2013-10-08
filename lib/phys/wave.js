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
*/

var constant = require('./constants/constants'),
units = require('./constants/units'),
multiplier = require('./constants/multiplier'),
basic = require('./basic'),
wave = exports;

/*
* Angular Frequency (ω) Function
@param {Number} Time (T)
@return {Number} ω = 2 pi / T
*/

wave.angularFrequency = function(T){
	return ((2 * Math.Pi) / (T));
};

/*
* Displacement (x) of a particle from an arbitrarily defined equilibrium point at time = t
@param {Number} Amplitude of oscillation (A)
@param {Number} Angular frequency (ω)
@param {Number} Time (t)
@return {Number} x(t) = A * sin(ω*t)
*/

wave.displacement = function(m, ω, t ) {
	return A * Math.sin(ω * t );
};

/*
* Velocity (v) of a particle from an arbitrarily defined equilibrium point at time = t
@param {Number} Angular frequency (ω)
@param {Number} Amplitude of oscillation (A)
@param {Number} Time (t)
@return {Number} v(t) = ω * A * cos(ω*t)
*/

wave.velocity = function(ω, A, t ) {
	return ω * A * Math.cos(ω * t );
};

/*
* Acceleration (a) of a particle from an arbitrarily defined equilibrium point at time = t
@param {Number} Angular frequency (ω)
@param {Number} Amplitude of oscillation (A)
@param {Number} Time (t)
@return {Number} a(t) = -ω^2 * A * sin(ω*t)
*/

wave.acceleration = function(ω, A, t ) {
	return (-1 * ω)^2 * A * Math.sin(ω * t );
};

/*
* Kinetic energy (K) of a particle undergoing simple harmonic motion.
@param {Number} Mass of particle (m)
@param {Number} Angular frequency (ω)
@param {Number} Amplitude of oscillation (A)
@param {Number} Displacement from equilibrium point (x)
@return {Number} K = 0.5 * m * ω^2 * (A^2 - x^2)
*/

wave.kineticEnergy = function(m, ω, A, x ) {
	return (0.5 * m * ω^2 * (A^2 - x^2));
};

/*
* Potential energy (U) of a particle undergoing simple harmonic motion.
@param {Number} Mass of particle (m)
@param {Number} Angular frequency (ω)
@param {Number} Displacement from equilibrium point (x)
@return {Number} K = 0.5 * m * ω^2 * x^2
*/

wave.potentialEnergy = function(m, ω, x ) {
	return (0.5 * m * ω^2 * x^2);
};

/*
* Total energy (E) of a particle undergoing simple harmonic motion.
@param {Number} Mass of particle (m)
@param {Number} Angular frequency (ω)
@param {Number} Amplitude of oscillation (A)
@return {Number} E = 0.5 * m * ω^2 * A^2 
*/

wave.netEnergy = function(m, ω, A) {
	return (0.5 * m * ω^2 * A^2);
};

/*
* Wave Speed (v) Function
@param {Number} Frequency (f)
@param {Number} Wavelength (λ)
@return {Number} v = f * λ
*/

wave.waveSpeed = function(frequency, wavelength) {
	return frequency * wavelength;
};


/*
* Refractive Index of an unknown material
@param {Number} Wave speed in known medium (v1)
@param {Number} Wave speed in unknown medium (v2)
@param {Number} Refractive Index of known medium (n)
@return {Number} n2 = (n1 * v1) / v2
*/

wave.refractiveIndex = function(v1, v2, n1) {
	return (n1 * v1) / v2
};

/*
* Minimum angular resolution (in rads) required to distinguish two bodies 
* or a measure of image quality
*
@param {Number} Wavelength (λ) of incident light
@param {Number} Diameter of aperature (d)
@return {Number} θ = 1.22 * (λ / d)
*/

wave.angularResolution = function(wavelength, d) {
	return 1.22 * (wavelength / d);
};

/*
* Acoustic beat frequency of two waves
@param {Number} Frequency of first wave (f1)
@param {Number} Frequency of second wave (f2)
@return {Number} b = |f2 - f1|
*/

wave.beatFrequency = function(f1, f2) {
	return Math.abs(f2 - f1);
};

/*
* Wavelength of the nth harmonic
@param {Number} Length of string (L)
@param {Numberr} Nth harmonic (n)
@return {Number} λ = 2L / n
*/

wave.harmonicLen= function(L, n) {
	return (2L / n);
};

/*
* Frequency of the nth harmonic
@param {Number} Wave speed (v)
@param {Number} Length of string (L)
@param {Numberr} Nth harmonic (n)
@return {Number} f = v / (2L / n)
*/

wave.harmonicFreq = function(v, L, n) {
	return (v / wave.harmonicLen(L, n));
};