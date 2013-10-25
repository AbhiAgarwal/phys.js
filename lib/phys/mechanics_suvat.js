/**
 * mechanics_suvat.js
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
var mechanics = require('./mechanics');
var suvat = exports;

/*
 * Creating an object for the SUVAT specification
 */

var equation = {
  s: null,
  u: null,
  v: null,
  a: null,
  t: null
};

/*
* Creating SUVAT function
@param {Number} Displacement (s)
@param {Number} Initial Velocity (u)
@param {Number} Final Velocity (v)
@param {Number} Acceleration (a)
@param {Number} Time (t)
@return {Nothing} Nothing
*/

suvat.create = function (s, u, v, a, t) {
  if (s != null) {
    equation.s = s;
  }
  if (u != null) {
    equation.u = u;
  }
  if (v != null) {
    equation.v = v;
  }
  if (a != null) {
    equation.a = a;
  }
  if (t != null) {
    equation.t = t;
  }
};

/*
* SUVAT Solving Formuala
@return {Number} Depending on the inputs on Create
*/

suvat.solve = function () {
  // If the user didn't initialize the .create() function
  if ((equation.s == null) && (equation.u == null) && (equation.v ==
    null) && (equation.a == null) && (equation.t == null)) {
    console.log(
      "Library hasn't been initialized - use suvat.create(...)");
    return null;
  }
  // SUVATuta, finding u, t, a
  // returns displacement
  else if ((equation.u != null) && (equation.t != null) && (equation.a !=
    null)) {
    return (mechanics.SUVATuta(equation.u, equation.t, equation.a));
  }
  // SUVATuvt, finding u, v, t
  // returns displacement
  else if ((equation.u != null) && (equation.v != null) && (equation.t !=
    null)) {
    return (mechanics.SUVATuvt(equation.u, equation.v, equation.t));
  }
  // SUVATvta, finding v, t, a
  // returns displacement
  else if ((equation.v != null) && (equation.t != null) && (equation.a !=
    null)) {
    return (mechanics.SUVATvta(equation.v, equation.t, equation.a));
  }
  // SUVATuat, finding u, a, t
  // returns velocity
  else if ((equation.u != null) && (equation.a != null) && (equation.t !=
    null)) {
    return (mechanics.SUVATuat(equation.u, equation.a, equation.t));
  }
  // SUVATuas, finding u, a, s
  // returns velocity^2, not velocity
  else if ((equation.u != null) && (equation.a != null) && (equation.s !=
    null)) {
    return (mechanics.SUVATuas(equation.u, equation.a, equation.s));
  }
  // Inputs don't match, ie: 
  // 2 inputs or 1 input
  else {
    console.log("Inputs don't match the required specifications");
    return null;
  }
};