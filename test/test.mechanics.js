/**
* test.mechanics.js
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
var mechanics = phys.mechanics;
var basic = phys.basic;

/*
Test for the different functions in the "Mechanics" Library.
To run the tests install Mocha - "npm install -g mocha"
and run "mocha" on the main directory.
*/

describe('mechanics', function() {
  console.log('\n\n\033[34mTesting Mechanics Library\033[0m');

  // mechanics.momentum
  // 2 parameters
  // Test 1: Multiplication of the two inputs
  it('momentum should return back multiplication of the two inputs', function (){
    assert.equal(18, mechanics.momentum(9, 2));
    assert.equal(0, mechanics.momentum(0, 2));
  });

  // Test 2: Multiplication of two negative inputs
  it('momentum should return back multiplication of the two negative inputs', function (){
    assert.equal(18, mechanics.momentum(-9, -2));
    assert.equal(2, mechanics.momentum(-1, -2));
  });  

  // Test 3: Multiplication of one negative and one non-negative inputs
  it('momentum should return back multiplication of the one negative and one non-negative inputs', function (){
    assert.equal(-18, mechanics.momentum(-9, 2));
    assert.equal(-2, mechanics.momentum(-1, 2));
  });

  // mechanics.force
  // 1 parameter
  // Test 1: Multiplication of parameter by Gravitational Constant
  it('force should return back multiplication of the number and the gravitational constant', function (){
    assert.equal(49.05, basic.twosig(mechanics.force(5)));
    assert.equal(88.29, basic.twosig(mechanics.force(9)));
  });

  // Test 2: Multiplication of a negative parameter by Gravitational Constant
  it('force should return back multiplication of the negative number and the gravitational constant', function (){
    assert.equal(-49.05, basic.twosig(mechanics.force(-5)));
    assert.equal(-88.29, basic.twosig(mechanics.force(-9)));
  });

  // mechanics.cforce
  // 2 parameters
  // Test 1: Multiplication of two basic inputs
  it('calculated force should return back multiplication of the two input numbers', function (){
    assert.equal(45, basic.twosig(mechanics.cforce(5, 9)));
    assert.equal(81, basic.twosig(mechanics.cforce(9, 9)));
  });

  // mechanics.forceMomentum
  // 4 parameters
  // Test 1: Inputting 4 Basic Variables into the Equation
  it('MomentumForce should return the difference of the first pair of numbers divided by the second pair of numbers', function (){
    assert.equal(1, basic.twosig(mechanics.forceMomentum(1, 2, 3, 4)));
    assert.equal(62, basic.twosig(mechanics.forceMomentum(959, 1021, 899, 900)));
  });

  // mechanics.cforceMomentum
  // 6 parameters
  // Test 1: Inputs 6 basic numbers into the Equation
  it('CalculatedForceMomentum takes 6 inputs and follows - Change in Momentum / Change in Time', function (){
    assert.equal(10, basic.twosig(mechanics.cforceMomentum(1, 2, 3, 4, 5, 6)));
    assert.equal(280.70, basic.twosig(mechanics.cforceMomentum(291, 300, 400, 920, 1000, 2000)));
  });


});