/**
* basic.js
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
* (6 functions - 2 personal to this)
*/

basic = exports;

basic.understand = function(){
	return ("Name: The name of the Function\n" +
			"Inputs: The inputs you need for the Function\n" +
			"Equation: The mathematical equation of the Function" 
	);
};

basic.self = function(){
	return ("The 'self' before a function name just means that you've to calculate some of the values yourself.");
};

basic.changein = function(){
	return("Change in numbers\n" +
			"Input: Number1, Number2\n" +
			"Change in numbers = Number2 - Number1" 
	);
};

basic.twosig = function(){
	return("Two Decimal Figures\n" +
			"Input: One Number\n" +
			"Shortens Number to 2 Decimal Places" 
	);
};

basic.toDegrees = function(){
	return("Radians To Degrees\n" +
			"Input: One Number\n" +
			"To Degrees = Number * (180 / Math.PI)" 
	);
};

basic.toRadians = function(){
	return("Degrees to Radians\n" +
			"Input: One Number\n" +
			"To Radians = Number * (Math.PI / 180)" 
	);
};