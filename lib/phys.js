/**
 * phys.js
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

var phys = exports;

// Constants, Multipliers, Units, and other Useful Identifiers
phys.constants = require('./phys/constants/constants');
phys.multiplier = require('./phys/constants/multiplier');
phys.units = require('./phys/constants/units');

// Pure Formulas Libraries
phys.basic = require('./phys/basic');
phys.mechanics = require('./phys/mechanics');
phys.thermal = require('./phys/thermal');
phys.wave = require('./phys/wave');
phys.fields = require('./phys/fields');
phys.energy = require('./phys/energy');
phys.electromagnetic = require('./phys/electromagnetic');
phys.quantum = require('./phys/quantum');

// Information Libraries
phys.ibasic = require('./information/basic');
phys.imechanics = require('./information/mechanics');
phys.ithermal = require('./information/thermal');
phys.iwave = require('./information/wave');
phys.ienergy = require('./information/energy');
phys.ifields = require('./information/fields');
phys.ielectromagnetic = require('./information/electromagnetic');
phys.iquantum = require('./information/quantum');