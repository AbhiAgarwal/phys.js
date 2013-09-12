/**
* wave.js
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

var constant = require('./constants/constants'),
units = require('./constants/units'),
multiplier = require('./constants/multiplier'),
basic = require('./basic'),
wave = exports;

/*
* Angular Frequency (ω) Function
@param {Number} Time (T)
@return {Number} ω = 2 pi / T
*/

wave.angularFrequency = function(T){
	return ((2 * Math.Pi) / (T));
};

