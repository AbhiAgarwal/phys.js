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
phys.shc = require('./phys/constants/shc');

// Information Library
phys.information = require('./phys/information');

// Pure Formulas
phys.basic = require('./phys/basic');
phys.mechanics = require('./phys/mechanics');
phys.thermal = require('./phys/thermal');
phys.wave = require('./phys/wave');

// Applied Formulas
phys.suvat = require('./phys/mechanics_suvat');