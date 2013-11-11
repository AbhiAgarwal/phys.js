/**
 * test.basic.js
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

var assert = require('assert');
var phys = require('../index.js');
var basic = phys.basic;

describe('basic', function () {
  console.log('Testing Basic Library');

  // basic.changein
  it('changein Function - Test 1', function () {
    assert.equal(-7, basic.changein(9, 2));
    assert.equal(2, basic.changein(0, 2));
  });
  it('changein Function - Test 2', function () {
    assert.equal(7, basic.changein(11, 18));
    assert.equal(-921, basic.changein(0, -921));
  });

  // basic.twosig
  it('twosig Function - Test 1', function () {
    assert.equal(23929.09, basic.twosig(23929.091020));
    assert.equal(29392.20, basic.twosig(29392.2));
  });
  it('twosig Function - Test 2', function () {
    assert.equal(2019.00, basic.twosig(2019));
    assert.equal(1.00, basic.twosig(1));
  });

  // basic.toDegrees
  it('toDegrees Function - Test 1', function () {
    assert.equal(114.59155902616465, basic.toDegrees(2));
    assert.equal(180, basic.toDegrees(Math.PI));
  });
  it('toDegrees Function - Test 2', function () {
    assert.equal(22459.94556912827, basic.toDegrees(392));
    assert.equal(108861.98107485642, basic.toDegrees(1900));
  });

  

 });