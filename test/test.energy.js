/**
 * test.energy.js
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
var energy = phys.energy;

describe('energy', function () {
  console.log('Testing Energy Library');
  it('Power', function () {
    assert.equal(192, energy.power(2, 3, 4));
    assert.equal(49248, energy.power(3, 19, 12));
  });
  it('Calculated Power', function () {
    assert.equal(192, energy.selfpower(2, 3, Math.pow(4, 3)));
    assert.equal(49248, energy.selfpower(3, 19, Math.pow(12, 3)));
  });
  it('Power per Unit Length', function () {
    assert.equal(470.88, energy.powerLength(2, 3, 8));
    assert.equal(17750199.285, energy.powerLength(91, 23, 19));
  });
  it('Calculated Power per Unit Length', function () {
    assert.equal(0.0000000032016, energy.selfpowerLength(Math.pow(2, 2), 3, 0.0000000000667, 8));
    assert.equal(0.00001574176695, energy.selfpowerLength(Math.pow(91, 2), 3, 0.0000000000667, 19));
  });
  it('Intensity', function () {
    assert.equal(0.10526315789473684, energy.intensity(2, 19));
    assert.equal(0.1414141414141414, energy.intensity(14, 99));
  });
  it('Albedo', function () {
    assert.equal(2, energy.albedo(4, 2));
    assert.equal(2, energy.albedo(11, 5.5));
  });  
  it('Total Energy Transfer', function () {
    assert.equal(20, energy.transfersurface(4, 5, 6, 7));
    assert.equal(3990, energy.transfersurface(19, 21, 99, 109));
  });  
  it('Surface Heat Capacity', function () {
    assert.equal(0.8, energy.surfaceheat(4, 5, 19, 20));
    assert.equal(0.09047619047619047, energy.surfaceheat(19, 21, 99, 109));
  }); 
 });