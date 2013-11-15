/**
 * test.wave.js
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
var wave = phys.wave;

describe('Wave', function () {
  console.log('Testing Wave Library');
  it('Angular Frequency', function () {
    assert.equal(0.5711986642890533, wave.angularFrequency(11));
    assert.equal(0.6283185307179586, wave.angularFrequency(10));
  }); 
  it('Displacement', function () {
    assert.equal(3.3526386523148384, wave.displacement(12, 19, 19));
    assert.equal(6.283133397683515, wave.displacement(13, 21, 9));
  }); 
  it('Velocity', function () {
    assert.equal(3436.591412195351, wave.velocity(19, 201, 3));
    assert.equal(219.96552790249206, wave.velocity(22, 10, 2));
  }); 
  it('Acceleration', function () {
    assert.equal(4953.939776453994, wave.acceleration(23, 10, 23));
    assert.equal(-1088.989334933716, wave.acceleration(11, 9, 1));
  }); 
  it('Kinetic energy', function () {
    assert.equal(94558.75, wave.kineticEnergy(10, 23, 6, 0.5));
    assert.equal(-177754.5, wave.kineticEnergy(100, 9, 1, 6.7));
  }); 
  it('Potential energy', function () {
    assert.equal(414, wave.potentialEnergy(23, 10, 0.6));
    assert.equal(0.18050000000000002, wave.potentialEnergy(10, 19, 0.01));
  }); 
  it('Total energy', function () {
    assert.equal(1103872, wave.netEnergy(11, 32, 14));
    assert.equal(72171, wave.netEnergy(22, 9, 9));
  }); 
  it('Wave Speed', function () {
    assert.equal(2619, wave.waveSpeed(291, 9));
    assert.equal(551, wave.waveSpeed(19, 29));
  }); 
  it('Refractive Index', function () {
    assert.equal(24.444444444444443, wave.refractiveIndex(11, 9, 20));
    assert.equal(14.482758620689655, wave.refractiveIndex(21, 29, 20));
  }); 
  it('Minimum angular resolution', function () {
    assert.equal(0.12708333333333333, wave.angularResolution(20, 192));
    assert.equal(0.546896551724138, wave.angularResolution(13, 29));
  }); 
  it('Acoustic beat frequency', function () {
    assert.equal(119, wave.beatFrequency(129, 10));
    assert.equal(9, wave.beatFrequency(12, 3));
  });
  it('Wavelength of the nth harmonic', function () {
    assert.equal(3.076923076923077, wave.harmonicLen(20, 13));
    assert.equal(0.1935483870967742, wave.harmonicLen(9, 93));
  });
  it('Frequency of the nth harmonic', function () {
    assert.equal(3.3333333333333335, wave.harmonicFreq(20, 39, 13));
    assert.equal(11.709677419354838, wave.harmonicFreq(99, 93, 22));
  });
 });