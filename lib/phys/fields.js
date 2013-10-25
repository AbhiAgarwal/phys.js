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

/*
* Gravitational Force
@param {Number} Gravitation (G) - Constant
@param {Number} Mass One (mone)
@param {Number} Mass Two (mtwo)
@param {Number} radius^2 (r^2)
@return {Number} Force = G * ((mone * mtwo) / r^2)
*/

fields.gravitationalForce = function (mone, mtwo, r, callback) {
  var ans = (constant.GravitationalConstant * ((mone * mtwo) / r));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

/*
* Calculated Gravitational Force
@param {Number} Gravitation (G) - Constant
@param {Number} Mass of First Object (mone)
@param {Number} Mass of Second Object (mtwo)
@param {Number} radius (r)
@return {Number} Force = G * ((mone * mtwo) / r^2)
*/

fields.cGravitationalForce = function (mone, mtwo, r, callback) {
  var ans = (constant.GravitationalConstant * ((mone * mtwo) / (Math.pow(
    r, 2))));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

/*
* Coulomb's Law
@param {Number} Coulomb constant (k) - Constant
@param {Number} Charge of First Object (qone)
@param {Number} Charge of Second Object (qtwo)
@param {Number} radius^2 (r^2)
@return {Number} Force = k * ((qone * qtwo) / r^2)
*/

fields.CoulombForce = function (qone, qtwo, r, callback) {
  var ans = (constant.CoulombConstant * ((qone * qtwo) / r));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

/*
* Calculated Coulomb's Law
@param {Number} Coulomb constant (k) - Constant
@param {Number} Charge of First Object (qone)
@param {Number} Charge of Second Object (qtwo)
@param {Number} radius (r)
@return {Number} Force = k * ((qone * qtwo) / r^2)
*/

fields.cCoulombForce = function (qone, qtwo, r, callback) {
  var ans = (constant.CoulombConstant * ((qone * qtwo) / Math.pow(r,
    2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

/*
* Acceleration (Gravity)
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

/*
* Electric Field
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