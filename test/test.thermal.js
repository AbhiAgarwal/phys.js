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

describe('Thermal:', function() {
  console.log('Testing Thermal Library');

  // thermal.pressure
  // 2 parameters
  // Test 1: Multiplication of the two inputs
  it('Pressure Function - Test 1', function(){
    assert.equal(4.5, thermal.pressure(9, 2));
    assert.equal(0, thermal.pressure(0, 2));
  });

  // thermal.selfheat
  // 3 parameters
  // Test 1: Multiplication of the three inputs
  it('Heat Function - Test 1', function(){
    assert.equal(72, thermal.selfheat(4, 2, 9));
    assert.equal(0, thermal.selfheat(0, 2, 19));
  });

  // thermal.heat
  // 4 parameters
  // Test 1: Multiplication of the three inputs, 
  // and difference between parameter 3 and 4.
  it('Calculated Heat Function - Test 1', function(){
    assert.equal(-5130, thermal.heat(9, 19, 34, 4));
    assert.equal(0, thermal.heat(0, 2, 19, 25));
  });

  // thermal.latentHeat
  // 2 parameters
  // Test 1: Multiplication of the two inputs:
  it('Latent Heat - Test 1', function(){
    assert.equal(640, thermal.latentHeat(20, 32));
    assert.equal(0, thermal.latentHeat(0, 29));
  });

  // thermal.idealGasPV
  // 2 parameters
  // Test 1: Multiplication of the two inputs:
  it('Ideal Gas Equation - Test 1', function(){
    assert.equal(255981.24, thermal.idealGasPV(102, 302));
    assert.equal(-33738.6, thermal.idealGasPV(203, -20));
    assert.equal(0, thermal.idealGasPV(0, 20));
  });

  // thermal.selfwork
  // 2 parameters
  // Test 1: Multiplication of the two inputs:
  it('Work Equation - Test 1', function(){
  	// Checking for accuracy as well.
    assert.equal(784.6800000000001, thermal.selfwork(39, 20.12));
    assert.equal(9150911.4021, thermal.selfwork(30291.001, 302.10));
    assert.equal(0, thermal.selfwork(0, 209));
  });

  // thermal.work
  // 3 parameters
  // Test 1: Multiplication of the two inputs,
  // and the difference of parameters 2 and 3:
  it('Calculated Work Equation - Test 1', function(){
    assert.equal(780, thermal.work(3.9, 192, 392));
    assert.equal(401.8, thermal.work(2.0, 2.10, 203));
    assert.equal(0, thermal.work(0, 0, 0));
  });

  // thermal.selfheatChange
  // 2 parameters
  // Test 1: Multiplication of the two inputs:
  it('Heat Relation Equation - Test 1', function(){
    assert.equal(29.8, thermal.selfheatChange(9.8, 20));
    assert.equal(-50, thermal.selfheatChange(-30, -20));
    assert.equal(0, thermal.selfheatChange(0, 0, 0));
  });

  // thermal.heatChange
  // 3 parameters
  // Test 1: Multiplication of the two inputs,
  // and the difference of parameters 2 and 3:
  it('Calculated Heat Relation Equation - Test 1', function(){
    assert.equal(62.8, thermal.heatChange(19.2, 32, 50));
    assert.equal(11, thermal.heatChange(30, 91, -50));
    assert.equal(-40, thermal.heatChange(-30, -30, -40));
  });

});