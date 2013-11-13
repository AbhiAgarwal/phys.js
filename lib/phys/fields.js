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

var constant = require('./constants/constants');
var units = require('./constants/units');
var multiplier = require('./constants/multiplier');
var basic = require('./basic');
var fields = exports;

// Calculated Gravitational Force
/*
@param {Number} Gravitation (G) - Constant
@param {Number} Mass of First Object (mone)
@param {Number} Mass of Second Object (mtwo)
@param {Number} radius (r)
@return {Number} Force = G * ((mone * mtwo) / r^2)
*/

fields.gravitationalForce = function (mone, mtwo, r, callback) {
  var ans = (constant.GravitationalConstant * ((mone * mtwo) / (Math.pow(
    r, 2))));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Gravitational Force
/*
@param {Number} Gravitation (G) - Constant
@param {Number} Mass One (mone)
@param {Number} Mass Two (mtwo)
@param {Number} radius^2 (r^2)
@return {Number} Force = G * ((mone * mtwo) / r^2)
*/

fields.selfGravitationalForce = function (mone, mtwo, r, callback) {
  var ans = (constant.GravitationalConstant * ((mone * mtwo) / r));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Coulomb's Law
/*
@param {Number} Coulomb constant (k) - Constant
@param {Number} Charge of First Object (qone)
@param {Number} Charge of Second Object (qtwo)
@param {Number} radius (r)
@return {Number} Force = k * ((qone * qtwo) / r^2)
*/

fields.coulombForce = function (qone, qtwo, r, callback) {
  var ans = (constant.CoulombConstant * ((qone * qtwo) / Math.pow(r,
    2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Coulomb's Law
/*
@param {Number} Coulomb constant (k) - Constant
@param {Number} Charge of First Object (qone)
@param {Number} Charge of Second Object (qtwo)
@param {Number} radius^2 (r^2)
@return {Number} Force = k * ((qone * qtwo) / r^2)
*/

fields.selfCoulombForce = function (qone, qtwo, r, callback) {
  var ans = (constant.CoulombConstant * ((qone * qtwo) / r));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Acceleration (Gravity)
/*
@param {Number} Force (F)
@param {Number} mass (m)
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
}

// Magnetic force F exerted on a current-carrying conductor in a B-field
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
}

// Gravitational potential energy of a particle m in a gravitatonal field formed by a body of mass M
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
}

// Gravitational potential energy of an arbitrary pont in a gravitatonal field formed by a body of mass M
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
}

// Velocity required for a body of to escape the orbit of a planet of mass M
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
}

// Electric potential of a test charge q in an electric field formed by a charge Q at a distance r
/*
@param {Number} Test charge (q)
@param {Number} Source charge (Q)
@param {Number} Separation (r)
@return {Number} U = (k * Q) / r
*/

fields.chargeElectricPotentialEnergy = function(Q, q, r, callback) {
  var ans = basic.CoulombConstant * (Q * q / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
}

// Electric potential of an arbitrary point in an electric field formed by a charge Q at a distance r
/*
@param {Number} Source charge (Q)
@param {Number} Separation (r)
@return {Number} U = (k * Q) / r
*/

fields.electricPotentialEnergy = function(Q, r, callback) {
  var ans = basic.CoulombConstant * (Q / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
}