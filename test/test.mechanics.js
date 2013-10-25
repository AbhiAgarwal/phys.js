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

describe('mechanics', function () {
  console.log('Testing Mechanics Library');

  // mechanics.momentum
  // 2 parameters
  // Test 1: Multiplication of the two inputs
  it('Momentum Function - Test 1', function () {
    assert.equal(18, mechanics.momentum(9, 2));
    assert.equal(0, mechanics.momentum(0, 2));
  });

  // Test 2: Multiplication of two negative inputs
  it('Momentum Function - Test 2', function () {
    assert.equal(18, mechanics.momentum(-9, -2));
    assert.equal(2, mechanics.momentum(-1, -2));
  });

  // Test 3: Multiplication of one negative and one non-negative inputs
  it('Momentum Function - Test 3', function () {
    assert.equal(-18, mechanics.momentum(-9, 2));
    assert.equal(-2, mechanics.momentum(-1, 2));
  });

  // mechanics.force
  // 1 parameter
  // Test 1: Multiplication of parameter by Gravitational Constant
  it('Force Function - Test 1', function () {
    assert.equal(49.05, basic.twosig(mechanics.force(5)));
    assert.equal(88.29, basic.twosig(mechanics.force(9)));
  });

  // Test 2: Multiplication of a negative parameter by Gravitational Constant
  it('Force Function - Test 2', function () {
    assert.equal(-49.05, basic.twosig(mechanics.force(-5)));
    assert.equal(-88.29, basic.twosig(mechanics.force(-9)));
  });

  // mechanics.cforce
  // 2 parameters
  // Test 1: Multiplication of two basic inputs
  it('Calculated Force Function - Test 1', function () {
    assert.equal(45, basic.twosig(mechanics.cForce(5, 9)));
    assert.equal(81, basic.twosig(mechanics.cForce(9, 9)));
  });

  // mechanics.forceMomentum
  // 4 parameters
  // Test 1: Inputting 4 Basic Variables into the Equation
  it('Force Momentum Function - Test 1', function () {
    assert.equal(1, basic.twosig(mechanics.forceMomentum(1, 2, 3, 4)));
    assert.equal(62, basic.twosig(mechanics.forceMomentum(959, 1021, 899, 900)));
  });

  // mechanics.cforceMomentum
  // 6 parameters
  // Test 1: Inputs 6 basic numbers into the Equation
  it('Calculated Force Momentum Function - Test 1', function () {
    assert.equal(10, basic.twosig(mechanics.cForceMomentum(1, 2, 3, 4, 5, 6)));
    assert.equal(280.70, basic.twosig(mechanics.cForceMomentum(291, 300, 400, 920, 1000, 2000)));
  });

  // mechanics.SUVATuta
  // 3 parameters
  // Test 1: Inputs 3 basic numbers into the Equation
  it('SUVAT Displacement Equation 1', function () {
    assert.equal(3686, basic.twosig(mechanics.SUVATuta(4, 19, 20)));
    assert.equal(6825, basic.twosig(mechanics.SUVATuta(10, 21, 30)));
  });

  // mechanics.SUVATuvt
  // 3 parameters
  // Test 1: Inputs 3 basic numbers into the Equation
  it('SUVAT Displacement Equation 2', function () {
    assert.equal(300, basic.twosig(mechanics.SUVATuvt(0, 30, 20)));
    assert.equal(3072, basic.twosig(mechanics.SUVATuvt(0, 192, 32)));
  });

  // mechanics.SUVATvta
  // 3 parameters
  // Test 1: Inputs 3 basic numbers into the Equation
  it('SUVAT Displacement Equation 3', function () {
    assert.equal(-5120, basic.twosig(mechanics.SUVATvta(0, 32, 10)));
    assert.equal(5120, basic.twosig(mechanics.SUVATvta(0, 32, -10)));
  });

  // mechanics.SUVATuat
  // 3 parameters
  // Test 1: Inputs 3 basic numbers into the Equation
  it('SUVAT Velocity Equation 1', function () {
    assert.equal(288, basic.twosig(mechanics.SUVATuat(0, 9, 32)));
    assert.equal(180, basic.twosig(mechanics.SUVATuat(0, 9, 20)));
  });

  // mechanics.SUVATuas
  // 3 parameters
  // Test 1: Inputs 3 basic numbers into the Equation
  // Returns v^2
  it('SUVAT Velocity Equation 2', function () {
    assert.equal(3924, basic.twosig(mechanics.SUVATuas(0, 9.81, 200)));
    assert.equal(178385.04, basic.twosig(mechanics.SUVATuas(0, 9.81, 9092)));
  });

  // mechanics.cSUVATuas
  // 3 parameters
  // Test 1: Inputs 3 basic numbers into the Equation
  // Returns v
  it('Calculated SUVAT Velocity Equation 2', function () {
    assert.equal(basic.twosig(Math.sqrt(3924)), basic.twosig(mechanics.cSUVATuas(0, 9.81, 200)));
    assert.equal(basic.twosig(Math.sqrt(178385.04)), basic.twosig(mechanics.cSUVATuas(0, 9.81, 9092)));
  });

  // mechanics.impulseMass
  // 3 parameters
  // Test 1: Inputs 3 basic numbers into the Equation
  it('Impulse with Mass Function - Test 1', function () {
    assert.equal(100, basic.twosig(mechanics.impulseMass(10, 11, 21)));
    assert.equal(140097, basic.twosig(mechanics.impulseMass(201, 203, 900)));
  });

  // mechanics.impulseForce
  // 3 parameters
  // Test 1: Inputs 3 basic numbers into the Equation
  it('Impuslse with Force Function - Test 1', function () {
    assert.equal(1500, basic.twosig(mechanics.impulseForce(300, 0, 5)));
    assert.equal(15000, basic.twosig(mechanics.impulseForce(500, 0, 30)));
  });

  // mechanics.workDone
  // 3 parameters
  // Test 1: Inputs 3 basic numbers into the Equation
  it('Work Done Equation', function () {
    assert.equal(0, basic.twosig(mechanics.workDone(300, 0, 60)));
    assert.equal(90.18, basic.twosig(mechanics.workDone(10, 30, 49)));
  });

  // mechanics.kineticVelocity
  // 2 parameters
  // Test 1: Inputs 2 basic numbers into the Equation
  it('Kinetic Energy using Velocity', function () {
    assert.equal(22500, basic.twosig(mechanics.kineticVelocity(30, 50)));
    assert.equal(1000, basic.twosig(mechanics.kineticVelocity(10, 20)));
  });

  // mechanics.kineticMomentum
  // 2 parameters
  // Test 1: Inputs 2 basic numbers into the Equation
  it('Kinetic Energy using Momentum', function () {
    assert.equal(55.56, basic.twosig(mechanics.kineticMomentum(100, 90)));
    assert.equal(795.67, basic.twosig(mechanics.kineticMomentum(309, 60)));
  });

  // mechanics.ckineticMomentum
  // 2 parameters
  // Test 1: Inputs 2 basic numbers into the Equation
  it('Calculated Kinetic Energy using Momentum', function () {
    assert.equal(450000, basic.twosig(mechanics.cKineticMomentum(100, 90)));
    assert.equal(2864430, basic.twosig(mechanics.cKineticMomentum(309, 60)));
  });

  // mechanics.potential
  // 3 parameters
  // Test 1: Inputs 3 basic numbers into the Equation
  it('Potential Energy', function () {
    assert.equal(33844.50, basic.twosig(mechanics.potential(69, 40, 90)));
    assert.equal(38455.20, basic.twosig(mechanics.potential(98, 60, 100)));
  });

  // mechanics.cpotential
  // 4 parameters
  // Test 1: Inputs 4 basic numbers into the Equation
  it('Calculated Potential Energy', function () {
    assert.equal(3139.20, basic.twosig(mechanics.cPotential(32, 9.81, 40, 50)));
    assert.equal(17640.00, basic.twosig(mechanics.cPotential(98, 9, 20, 40)));
  });

  // mechanics.power
  // 2 parameters
  // Test 1: Inputs 2 basic numbers into the Equation
  it('Power Equation', function () {
    assert.equal(2000, basic.twosig(mechanics.power(50, 40)));
    assert.equal(1000, basic.twosig(mechanics.power(20, 50)));
  });

  // mechanics.centripetalVelocity
  // 2 parameters
  // Test 1: Inputs 2 basic numbers into the Equation
  it('Centripetal Velocity Equation', function () {
    assert.equal(4.44, basic.twosig(mechanics.centripetalVelocity(20, 90)));
    assert.equal(40, basic.twosig(mechanics.centripetalVelocity(40, 40)));
  });

  // mechanics.centripetalVelocity
  // 2 parameters
  // Test 1: Inputs 2 basic numbers into the Equation
  it('Calculated Centripetal Velocity Equation', function () {
    assert.equal(0.22, basic.twosig(mechanics.cCentripetalVelocity(20, 90)));
    assert.equal(1, basic.twosig(mechanics.cCentripetalVelocity(40, 40)));
  });

  // mechanics.centripetalTime
  // 2 parameters
  // Test 1: Inputs 2 basic numbers into the Equation
  it('Centripetal Time Equation', function () {
    assert.equal(178.01, basic.twosig(mechanics.centripetalTime(0.5, 0.333)));
    assert.equal(1.51, basic.twosig(mechanics.centripetalTime(92.1, 49)));
  });

  // mechanics.cCentripetalTime
  // 2 parameters
  // Test 1: Inputs 2 basic numbers into the Equation
  it('Calculated Centripetal Time Equation', function () {
    assert.equal(59.28, basic.twosig(mechanics.cCentripetalTime(0.5, 0.333)));
    assert.equal(74.20, basic.twosig(mechanics.cCentripetalTime(92.1, 49)));
  });
});