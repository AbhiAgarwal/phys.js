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
var basic = require('./basic');
var mechanics = exports;

// Momentum
/*
@param {Number} Mass (m)
@param {Number} Velocity (v)
@return {Number} Momentum = Mass * Velocity
*/

mechanics.momentum = function (m, v, callback) {
  var ans = m * v;
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Force
/*
@param {Number} Mass (m)
@return {Number} Force = Mass * Acceleration
*/

mechanics.force = function (m, callback) {
  var ans = (m * constant.gAcceleration);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Force (Own Acceleration Input)
/*
@param {Number} Mass (m)
@param {Number} Acceleration (g)
@return {Number} Force = Mass * Acceleration
*/

mechanics.cForce = function (m, g, callback) {
  var ans = (m * g);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Force (Momentum over Time)
/*
@param {Number} Change in Momentum (p1, p2)
@param {Number} Change in Time (t1, t2)
@return {Number} Force = Change in Momentum / Change in Time
*/

mechanics.forceMomentum = function (p1, p2, t1, t2, callback) {
  var ans = ((basic.changein(p1, p2)) / (basic.changein(t1, t2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Force (Momentum over Time)
/*
@param {Number} Change in Momentum (m1, v1, m2, v2)
@param {Number} Change in Time (t1, t2)
@return {Number} Force = ((m2 * v2) - (m1 * v1)) / (t2 - t1)
*/

mechanics.cForceMomentum = function (m1, v1, m2, v2, t1, t2, callback) {
  var ans = ((basic.changein((mechanics.momentum(m1, v1)),
    mechanics.momentum(m2, v2))) / (basic.changein(t1, t2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// SUVAT Displacement (Using u, t, a)
/*
@param {Number} Initial Velocity (u)
@param {Number} Time (t)
@param {Number} Acceleration (a)
@return {Number} s = u * t + 1/2 * a * t^2
*/

mechanics.SUVATuta = function (u, t, a, callback) {
  var ans = ((u * t) + ((1 / 2) * a * (Math.pow(t, 2))));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// SUVAT Displacement (using u, v, t)
/*
@param {Number} Initial Velocity (u)
@param {Number} Final Velocity (v)
@param {Number} Time (t)
@return {Number}  s = (1 / 2 * (u + v)) * t
*/

mechanics.SUVATuvt = function (u, v, t, callback) {
  var ans = ((1 / 2) * ((u + v) * t));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// SUVAT Displacement (using a, v, t)
/*
@param {Number} Acceleration (a)
@param {Number} Final Velocity (v)
@param {Number} Time (t)
@return {Number}  s = v * t - 1/2 * a * t^2
*/

mechanics.SUVATvta = function (v, t, a, callback) {
  var ans = ((v * t) - ((1 / 2) * a * (Math.pow(t, 2))));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// SUVAT Displacement (using u, a, t)
/*
@param {Number} Initial Velocity (u)
@param {Number} Acceleration (a)
@param {Number} Time (t)
@return {Number}  v = u + a * t
*/

mechanics.SUVATuat = function (u, a, t, callback) {
  var ans = (u + (a * t));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// SUVAT Displacement (using u, a, s)
/*
@param {Number} Initial Velocity (u)
@param {Number} Acceleration (a)
@param {Number} Dispalcement (s)
@return {Number}  v^2 = u^2 + 2 * a * s (Returns v^2 not v)
*/

mechanics.SUVATuas = function (u, a, s, callback) {
  var ans = (Math.pow(u, 2) + (2 * a * s));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated SUVAT Displacement (using u, a, s)
/*
@param {Number} Initial Velocity (u)
@param {Number} Acceleration (a)
@param {Number} Dispalcement (s)
@return {Number}  v = SquareRoot(u^2 + 2 * a * s) (Returns v)
*/

mechanics.cSUVATuas = function (u, a, s, callback) {
  var ans = Math.sqrt(mechanics.SUVATuas(u, a, s));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Impulse w/ Mass & Velocity
/*
@param {Number} Mass (m)
@param {Number} Initial Velocity (v1)
@param {Number} Finaly Velocity (v2)
@return {Number} Impulse = Mass * Change in Velocity
*/

mechanics.impulseMass = function (m, v1, v2, callback) {
  var ans = (m * (basic.changein(v1, v2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Impulse w/ Force & Times
/*
@param {Number} Force (f)
@param {Number} Initial Time (t1)
@param {Number} Final Time (t2)
@return {Number} Impulse = Force * Change im time
*/

mechanics.impulseForce = function (f, t1, t2, callback) {
  var ans = (f * (basic.changein(t1, t2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Work
/*
@param {Number} Force (f)
@param {Number} Displacement (s)
@param {Number} Cos(Thetha) (angle - Cosine of an angle theta)
@return {Number} Work = Force * Distance * Cos(Thetha)
*/

mechanics.workDone = function (f, s, angle, callback) {
  var ans = (f * s * Math.cos(angle));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Kinetic Energy w/ Velocity
/*
@param {Number} Velocity (v)
@param {Number} Mass (m)
@return {Number} Kinetic Energy = 1/2 * m * v^2
*/

mechanics.kineticVelocity = function (v, m, callback) {
  var ans = ((1 / 2) * (m) * (Math.pow(v, 2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Kinetic Energy w/ Momentum
/*
@param {Number} Momentum (p)
@param {Number} Mass (m)
@return {Number} Kinetic Energy = (p^2) / (2 * m)
*/

mechanics.kineticMomentum = function (p, m, callback) {
  var ans = ((Math.pow(p, 2)) / (2 * m));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Kinetic Energy Momentum
/*
@param {Number} Velocity (v)
@param {Number} Mass (m)
@return {Number} Kinetic Energy = ((m * v)^2) / (2 * m)
*/

mechanics.cKineticMomentum = function (v, m, callback) {
  var ans = ((Math.pow((mechanics.momentum(m, v)), 2)) / (2 * m));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Potential Energy
/*
@param {Number} Mass (m)
@param {Number} Initial Height (h1)
@param {Number} Final Height (h2)
@return {Number} Potential Energy = Mass * Gravitational Field Strength * Change in Height
*/

mechanics.potential = function (m, h1, h2, callback) {
  var ans = ((m) * (constant.gAcceleration) * (basic.changein(h1,
    h2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Potential Energy (Entering own g)
/*
@param {Number} Mass (m)
@param {Number} Gravitational Field Strength (g)
@param {Number} Initial Height (h1)
@param {Number} Final Height (h2)
@return {Number} Potential Energy = Mass * Gravitational Field Strength * Change in Height
*/

mechanics.cPotential = function (m, g, h1, h2, callback) {
  var ans = ((m) * (g) * (basic.changein(h1, h2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Power
/*
@param {Number} Force (f)
@param {Number} Velocity (v)
@return {Number} Power = Force * Velocity
*/

mechanics.power = function (f, v, callback) {
  var ans = (f * v);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Centripetal Acceleration w/ Velocity
/*
@param {Number} Velocity (v)
@param {Number} r (radius)
@return {Number} Acceleration = Velocity^2 / Radius
*/

mechanics.centripetalVelocity = function (v, r, callback) {
  var ans = ((Math.pow(v, 2)) / (r));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Centripetal Acceleration w/ Velocity (Entering v^2)
/*
@param {Number} Velocity (v)
@param {Number} r (radius)
@return {Number} Acceleration = Velocity^2 / Radius
*/

mechanics.cCentripetalVelocity = function (v, r, callback) {
  var ans = (v / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Centripetal Acceleration w/ Time
/*
@param {Number} Radius (r)
@param {Number} Time (t)
@return {Number} Acceleration = 4 * Pi^2 * r / (t^2)
*/

mechanics.centripetalTime = function (r, t, callback) {
  var ans = ((4 * (Math.pow(Math.PI, 2)) * r) / (Math.pow(t, 2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Centripetal Acceleration w/ Time (Self calculating t^2)
/*
@param {Number} Radius (r)
@param {Number} Time (t)
@return {Number} Acceleration = 4 * Pi^2 * r / (t^2)
*/

mechanics.cCentripetalTime = function (r, t, callback) {
  var ans = ((4 * (Math.pow(Math.PI, 2)) * r) / (t));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};