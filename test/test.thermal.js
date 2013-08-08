/**
* test.thermal.js
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

var assert = require('assert'),
phys = require('../index.js'),
thermal = phys.thermal,
basic = phys.basic;

/*
Test for the different functions in the "Thermal" Library.
To run the tests install Mocha - "npm install -g mocha"
and run "mocha" on the main directory.
*/

describe('thermal', function() {
  console.log('Testing Thermal Library');

  // thermal.pressure
  // 2 parameters
  // Test 1: Multiplication of the two inputs
  it('Pressure Function - Test 1', function (){
    assert.equal(4.5, thermal.pressure(9, 2));
    assert.equal(0, thermal.pressure(0, 2));
  });

});