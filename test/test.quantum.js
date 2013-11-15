/**
 * test.quantum.js
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
var quantum = phys.quantum;

describe('Quantum', function () {
  console.log('Testing Quantum Library');
  it('Energy', function () {
    assert.equal(180000000000000000, quantum.energy(2));
    assert.equal(1710000000000000000, quantum.energy(19));
  });
  it('Energy of a quanta of light', function () {
    assert.equal(7.293e-33, quantum.energyLight(11));
    assert.equal(1.5248999999999998e-32, quantum.energyLight(23));
  });
  it('Momentum of quanta', function () {
    assert.equal(2.882608695652174e-34, quantum.momentum(2.3));
    assert.equal(1.6574999999999998e-34, quantum.momentum(4));
  }); 
  it('De Broglie wavelength', function () {
    assert.equal(4.1437499999999994e-35, quantum.deBroglie(16));
    assert.equal(2.7624999999999996e-35, quantum.deBroglie(24));
  });   
  it('Lower-bound to uncertainty in position', function () {
    assert.equal(1.8193056425849413e-34, quantum.uncPosition(0.29));
    assert.equal(2.7479095643210055e-35, quantum.uncPosition(1.920));
  });
  it('Lower-bound to uncertainty in momentum', function () {
    assert.equal(0.00000000000000000000000000000000018193056425849413, quantum.uncPosition(0.29));
    assert.equal(0.000000000000000000000000000000000027479095643210055, quantum.uncPosition(1.920));
  });
  it('Maximum kinetic energy of emitted electrons incident with a frequency f upon a metal with a work function W', function () {
    assert.equal(-14, quantum.maxKineticEnergy(14, 23));
    assert.equal(-8, quantum.maxKineticEnergy(8, 0.10));
  });  
  it('Minimum energy required to delocalize an electron from the surface of a metal', function () {
    assert.equal(0.000000000000000000000000000000007293, quantum.minWork(11));
    assert.equal(0.000000000000000000000000000000015248999999999998, quantum.minWork(23));
  }); 
  it('Minimum frequency required to induce photoelectric effect', function () {
    assert.equal(16591251885369534000000000000000000, quantum.thresholdFreq(11));
    assert.equal(34690799396681755000000000000000000, quantum.thresholdFreq(23));
  }); 
  it('Electron In a Box: Energy Levels', function () {
    assert.equal(0.00000000000000000000000000000000000000000000000000000000000000000000006783472222222221, quantum.energyLevels(1, 10, 9));
    assert.equal(0.0000000000000000000000000000000000000000000000000000000000000000000011447109374999997, quantum.energyLevels(2, 12, 4));
  }); 
  it('Rates of Radioactive Decay', function () {
    assert.equal(0, quantum.decay(2010, 200, 9));
    assert.equal(0.2706705664732254, quantum.decay(2, 0.10, 20));
  }); 
  it('Half Life', function () {
    assert.equal(0.030136833937388925, quantum.halflife(23));
    assert.equal(0.06301338005090412, quantum.halflife(11));
  }); 
  it('Activity, in number of counts per second', function () {
    assert.equal(46230, quantum.activity(2010, 23));
    assert.equal(22, quantum.activity(2, 11));
  }); 
  it('Activity, in number of counts per second', function () {
    assert.equal(1.5993473502461082, quantum.activityE(2010, 0.25, 23));
    assert.equal(0.000004441442874196583, quantum.activityE(2, 1.2, 11));
  }); 
 });