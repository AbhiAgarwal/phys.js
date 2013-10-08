/**
* information.js
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

suvat = exports;

/*
* Creating an object for the SUVAT specification
*/

suvat.SUVAT = function(){
	return ("SUVAT Equation\n" +
			"S: Displacement (m)\n" +
			"U: Initial Velocity (m/s)\n" +
			"V: Final Velocity (m/s)\n" +
			"A: Acceleration (m/s^2)\n" +
			"T: Time (s)"
	);
};

/*
* Creating SUVAT function
@param {Number} Displacement (s)
@param {Number} Initial Velocity (u)
@param {Number} Final Velocity (v)
@param {Number} Acceleration (a)
@param {Number} Time (t)
@return {Nothing} Nothing
*/

suvat.create = function(){
	return ("Initialize SUVAT Equation\n" +
			"Inputs are: S: Displacement (m), U: Initial Velocity (m/s), V: Final Velocity (m/s), A: Acceleration (m/s^2), T: Time (s)\n" +
			"Only 3 inputs of the above are required."
	);
};

/*
* SUVAT Solving Formuala
@param {Nothing} Nothing
@return {Number} Depending on the inputs on Create
*/

suvat.solve = function(){
	return ("Solve SUVAT Equations\n" +
			"Inputs are: None\n" +
			"Returns Solved Equation Result"
	);
};