/**
 * test.fields.js
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
var fields = phys.fields;

describe('Fields', function () {
  console.log('Testing Fields Library');
  it('Gravitational Force', function () {
    assert.equal(1.482222222222222e-11, fields.gravitationalForce(1, 2, 3));
    assert.equal(8.0890425e-8, fields.gravitationalForce(21, 231, 2));
  }); 
  it('Calculated Gravitational Force', function () {
    assert.equal(6.533333333333333, fields.selfGravitationalForce(1, 2, 3, 9.8));
    assert.equal(23794.155000000002, fields.selfGravitationalForce(21, 231, 2, 9.81));
  }); 
  it('Calculated Coulombs Law', function () {
    assert.equal(2809374999.9999995, fields.coulombForce(1.6, 2, 3.2));
    assert.equal(312049586776.8595, fields.coulombForce(21, 2, 1.1));
  });  
  it('Acceleration', function () {
    assert.equal(0.10526315789473684, fields.gravitationalAcceleration(2, 19));
    assert.equal(2.8947368421052633, fields.gravitationalAcceleration(55, 19));
  }); 
  it('Electric Field', function () {
    assert.equal(0.19387755102040816, fields.electricField(19, 98));
    assert.equal(0.008130081300813009, fields.electricField(1, 123));
  }); 
  it('Electric Field from change', function () {
    assert.equal(-0.8586956521739131, fields.gradElectricField(19, 98, 100, 192));
    assert.equal(0.10638297872340426, fields.gradElectricField(24, 29, 66, 19));
  }); 
  it('Gravitational Field from change', function () {
    assert.equal(-0.8586956521739131, fields.gradGravField(19, 98, 100, 192));
    assert.equal(0.10638297872340426, fields.gradGravField(24, 29, 66, 19));
  });
  it('Magnetic force', function () {
    assert.equal(12673, fields.particleMagneticForce(19, 29, 23, 90));
    assert.equal(5.926130043570827, fields.particleMagneticForce(1, 2, 3, 81));
  });
  it('Magnetic force', function () {
    assert.equal(216.20000000000002, fields.conductorMagneticForce(23, 1, 9.4, 90));
    assert.equal(153.69418268000936, fields.conductorMagneticForce(19, 2.1, 3.9, 81));
  });
  it('Gravitational potential energy', function () {
    assert.equal(-1.0005e-10, fields.particleGravitationalPotentialEnergy(2, 3, 4));
    assert.equal(-1.33735175879397e-10, fields.particleGravitationalPotentialEnergy(19, 21, 199));
  });
  it('Gravitational potential energy', function () {
    assert.equal(-14.700000000000001, fields.selfparticleGravitationalPotentialEnergy(2, 3, 4, 9.8));
    assert.equal(-19.66929648241206, fields.selfparticleGravitationalPotentialEnergy(19, 21, 199, 9.81));
  });
  it('Gravitational potential energy of an arbitrary pont', function () {
    assert.equal(-2.106315789473684e-11, fields.gravitationalPotentialEnergy(6, 19));
    assert.equal(-3.335e-11, fields.gravitationalPotentialEnergy(2, 4));
  });
  it('Velocity required for a body', function () {
    assert.equal(0.000030331501776206202, fields.escapeVelocity(200, 29));
    assert.equal(0.00004912562745377684, fields.escapeVelocity(199, 11));
  });
  it('Electric potential of a test charge', function () {
    assert.equal(2370090909090.909, fields.chargeElectricPotentialEnergy(200, 29, 22));
    assert.equal(285204492753.6232, fields.chargeElectricPotentialEnergy(199, 11, 69));
  });
  it('Electric potential of a test charge', function () {
    assert.equal(269700000000, fields.electricPotentialEnergy(60, 2));
    assert.equal(21975555555.555557, fields.electricPotentialEnergy(22, 9));
  });
 });