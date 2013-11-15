/**
 * callback.js
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

/*
* Example that depicts how you can use callbacks
* in our Physics Library.
*/

// Importing Library
var phys = require('../index.js');

// Using the Mechanics Momentum Function 
// and passing in a Callback
phys.mechanics.momentum(2, 3, function(numb){
	console.log("The Answer is: " + numb) 
});

// Using the Quantum Energy Function 
// and passing in a Callback
phys.quantum.energy(2, function(numb){
	console.log("The Answer is: " + numb) 
});

/*
* Lets try and change the Speed of Light in a Vacuum
* and recalculate our answer.
*/

// Altering a Constant to increase accuracy
phys.constants.SpeedofLightVacuum = 299792458;

// Using the Quantum Energy Function Again
// and passing in a Callback
phys.quantum.energy(2, function(numb){
	console.log("The Adjusted Answer is: " + numb) 
});