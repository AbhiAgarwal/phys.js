/**
 * basic.js
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
 * (4 functions)
*/

var basic = exports;

// Change in numbers
//
// basic.changein(Initial X, Final X)
/*
@param {Number} Number1 (p1)
@param {Number} Number2 (p2)
@return {Number} Difference between Number1 & Number2
*/

basic.changein = function (p1, p2) {
  var ans = (p2 - p1);
  return (ans);
};

// Two Decimal Figures
//
// basic.twosig(number)
/*
@param {Number} Number (number)
@return {Number} Converts the number to have 2 decimal places
*/

basic.twosig = function (number) {
  var ans = (number.toFixed(2));
  return (ans);
};

// Radians To Degrees
//
// basic.toDegrees(radians)
/*
@param {Number} Number (number)
@return {Number} Converts Radians to Degrees
*/

basic.toDegrees = function(radians) {
  var ans = radians * (180 / Math.PI);
  return ans;
};

// Degrees to Radians
//
// basic.toRadians(degrees)
/*
@param {Number} Number (number)
@return {Number} Converts degrees to Radians
*/

basic.toRadians = function(degrees) {
  var ans = degrees * (Math.PI / 180);
  return ans;
};
