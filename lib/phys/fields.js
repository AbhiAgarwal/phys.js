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
 * (16 functions)
 */

var constant = require('./constants/constants');
var units = require('./constants/units');
var multiplier = require('./constants/multiplier');
var basic = require('./basic');
var fields = exports;

// Gravitational Force
// 
// fields.gravitationalForce(massOne, massTwo, radius)
/*
@param {Number} Mass of First Object (mone)
@param {Number} Mass of Second Object (mtwo)
@param {Number} radius (r)
@return {Number} Force = G * ((mone * mtwo) / r^2)
*/

fields.gravitationalForce = function (mone, mtwo, r, callback) {
  var ans = constant.GravitationalConstant * ((mone * mtwo) / (Math.pow(
    r, 2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Gravitational Force
// 
// fields.selfGravitationalForce(massOne, massTwo, radius, gravConst)
// 
// Inputting Gravitation Constant Yourself
/*
@param {Number} Mass One (mone)
@param {Number} Mass Two (mtwo)
@param {Number} radius^2 (r^2)
@param {Number} Gravitation Constant (g), self input
@return {Number} Force = G * ((mone * mtwo) / r^2)
*/

fields.selfGravitationalForce = function (mone, mtwo, r, g, callback) {
  var ans = g * ((mone * mtwo) / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Coulomb's Law
// 
// coulombForce(chargeOne, chargeTwo, radius)
/*
@param {Number} Charge of First Object (qone)
@param {Number} Charge of Second Object (qtwo)
@param {Number} radius (r)
@return {Number} Force = k * ((qone * qtwo) / r^2)
*/

fields.coulombForce = function (qone, qtwo, r, callback) {
  var ans = constant.CoulombConstant * ((qone * qtwo) / Math.pow(r,
    2));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Coulomb's Law
// 
// selfCoulombForce(chargeOne, chargeTwo, radius, CoulombConst)
// 
// Inputting Coulomb Constant Yourself
/*
@param {Number} Charge of First Object (qone)
@param {Number} Charge of Second Object (qtwo)
@param {Number} radius^2 (r^2)
@param {Number} Coulomb constant (k)
@return {Number} Force = k * ((qone * qtwo) / r^2)
*/

fields.selfCoulombForce = function (qone, qtwo, r, k, callback) {
  var ans = k * ((qone * qtwo) / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Acceleration (Gravity)
// 
// fields.gravitationalAcceleration(Force, Mass)
/*
@param {Number} Force (F)
@param {Number} Mass (m)
@return {Number} Acceleration = F / m
*/

fields.gravitationalAcceleration = function (F, m, callback) {
  var ans = (F / m);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Electric Field
// 
// fields.electricField(Force, Charge)
/*
@param {Number} Force (F)
@param {Number} Charge (q)
@return {Number} Electric Field = F / q
*/

fields.electricField = function (F, q, callback) {
  var ans = (F / q);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Electric Field from change in Electric potential energy V with respect to position
// 
// fields.gradElectricField(Electric Potential v1, v2, Position x1, x2)
/*
@param {Number} Electric potential energy (v1, v2)
@param {Number} Position (x1, x2)
@return {Number} Electric Field Strength E = - (v2 - v1) / (x2 - x1)
*/

fields.gradElectricField = function (v1, v2, x1, x2, callback) {
  var ans = (-1 * basic.changein(v1, v2)) / (basic.changein(x1, x2));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Gravitational Field from change in Gravitational potential energy V with respect to position
// 
// fields.gradGravField(Gravitational potential v1, v2, Position x1, x2)
/*
@param {Number} Gravitational potential energy (v1, v2)
@param {Number} Position (x1, x2)
@return {Number} Gravitational Field Strength g = - (u2 - u1) / (x2 - x1)
*/

fields.gradGravField = function (u1, u2, x1, x2, callback) {
  var ans = (-1 * basic.changein(u1, u2)) / (basic.changein(x1, x2));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Magnetic force F exerted on a particle passing through B-field
// 
// fields.particleMagneticForce(Charge, Velocity, B-field strength, Angle)
/*
@param {Number} Charge (q)
@param {Number} Velocity (v)
@param {Number} B-field strength (B)
@param {Number} Angle (in degrees) between B-field and path of particle (theta)
@return {Number} Force F = q * v * B * sin(theta)
*/

fields.particleMagneticForce = function(q, v, B, theta, callback) {
  var ans = (q * v * B) * Math.sin(basic.toRadians(theta));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Magnetic force F exerted on a current-carrying conductor in a B-field
// 
// fields.conductorMagneticForce(B-field strength, Current, Length, Angle)
/*
@param {Number} B-field strength (B)
@param {Number} Current (I)
@param {Number} Length (l)
@param {Number} Angle (in degrees) between B-field and path of particle (theta)
@return {Number} Force F = B * I * L * sin(theta)
*/

fields.conductorMagneticForce = function(B, I, l, theta, callback) {
  var ans = (B * I * l) * Math.sin(basic.toRadians(theta, callback));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Gravitational potential energy of a particle m in a gravitatonal field formed by a body of mass M
// 
// fields.particleGravitationalPotentialEnergy(Particle mass, Source mass, Seperation from source mass)
/*
@param {Number} Particle mass (m)
@param {Number} Source mass (M)
@param {Number} Seperation from source mass (r)
@return {Number} U = -G * (m * M / r)
*/

fields.particleGravitationalPotentialEnergy = function(m, M, r, callback) {
  var ans = (-1 * constant.GravitationalConstant) * (m * M / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Gravitational potential energy of a particle m in a gravitatonal field formed by a body of mass M
// 
// fields.selfparticleGravitationalPotentialEnergy(Particle mass, Source mass, Seperation from source mass, Gravitational Constant)
// 
// Inputting the Gravitational Constant yourself
/*
@param {Number} Particle mass (m)
@param {Number} Source mass (M)
@param {Number} Seperation from source mass (r)
@param {Number} Gravitational Constant (g)
@return {Number} U = -g * (m * M / r)
*/

fields.selfparticleGravitationalPotentialEnergy = function(m, M, r, g, callback) {
  var ans = (-1 * g) * (m * M / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Gravitational potential energy of an arbitrary pont in a gravitatonal field formed by a body of mass M
// 
// fields.gravitationalPotentialEnergy(Mass, Seperation from source mass)
/*
@param {Number} Source mass (M)
@param {Number} Seperation from source mass (r)
@return {Number} U = -G * (M / r)
*/

fields.gravitationalPotentialEnergy = function(M, r, callback) {
  var ans = (-1 * constant.GravitationalConstant) * (M / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Velocity required for a body of to escape the orbit of a planet of mass M
// 
// fields.escapeVelocity(Mass M of planet, Radius r of planet)
/*
@param {Number} Mass M of planet
@param {Number} Radius r of planet
@return {Number} v = sqrt(2G (M / r))
*/

fields.escapeVelocity = function(M, r, callback) {
  var ans = Math.sqrt((2 * constant.GravitationalConstant) * (M / r));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Electric potential of a test charge q in an electric field formed by a charge Q at a distance r
// 
// fields.chargeElectricPotentialEnergy(Source charge, Test charge, Seperation)
/*
@param {Number} Test charge (q)
@param {Number} Source charge (Q)
@param {Number} Separation (r)
@return {Number} U = (k * Q * q) / r
*/

fields.chargeElectricPotentialEnergy = function(Q, q, r, callback) {
  var ans = constant.CoulombConstant * (Q * q / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Electric potential of an arbitrary point in an electric field formed by a charge Q at a distance r
// 
// fields.electricPotentialEnergy(Source charge, Separation)
/*
@param {Number} Source charge (Q)
@param {Number} Separation (r)
@return {Number} U = (k * Q) / r
*/

fields.electricPotentialEnergy = function(Q, r, callback) {
  var ans = constant.CoulombConstant * (Q / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};