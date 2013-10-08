/**
* mechanics.js
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

mechanics = exports;

/*
* Momentum
@param {Number} Mass (m)
@param {Number} Velocity (v)
@return {Number} Momentum = Mass * Velocity
*/

mechanics.momentum = function(){
	return ("The Momentum Function\n" +
			"Inputs are: Mass & Velocity.\n" +
			"Momentum = Mass * Velocity." 
	);
};

/*
* Force
@param {Number} Mass (m)
@return {Number} Force = Mass * Acceleration
*/

mechanics.force = function(){
	return ("The Force Function\n" +
			"Input is: Mass.\n" +
			"Force = Mass * Acceleration."
	);
};

/*
* Calculated Force (Own Acceleration Input)
@param {Number} Mass (m)
@param {Number} Acceleration (g)
@return {Number} Force = Mass * Acceleration
*/

mechanics.cForce = function(){
	return ("The Calculated Force Function\n" +
			"Inputs are: Mass, and Acceleration.\n" +
			"Force = Mass * Acceleration."
	);
};

/*
* Force (Momentum over Time)
@param {Number} Change in Momentum (p1, p2)
@param {Number} Change in Time (t1, t2)
@return {Number} Force = Change in Momentum / Change in Time
*/

mechanics.forceMomentum = function(){
	return ("The Force Equation - using Momentum\n" +
			"Inputs are: Initial Momentum, Final Momentum, Initial Time, Final Time.\n" +
			"Force = (Final Momentum - Initial Momentum) / (Final Time - Initial Time)"
	);
};

/*
* Calculated Force (Momentum over Time)
@param {Number} Change in Momentum (m1, v1, m2, v2)
@param {Number} Change in Time (t1, t2)
@return {Number} Force = ((m2 * v2) - (m1 * v1)) / (t2 - t1)
*/

mechanics.cForceMomentum = function(){
	return ("The Calculated Force Equation - using Momentum\n" +
			"Inputs are: Initial Momentum: Initial Velocity, Initial Mass, Final Momentum: Final Velocity, Finaly Mass, Initial Time, Final Time.\n" +
			"Force = (Momentum(Final Mass, Final Velocity) - Momentum(Initial Mass, Initial Velocity)) / (Final Time - Initial Time)"
	);
};

/*
* SUVAT Displacement (Using u, t, a)
@param {Number} Initial Velocity (u)
@param {Number} Time (t)
@param {Number} Acceleration (a)
@return {Number} s = u * t + 1/2 * a * t^2
*/

mechanics.SUVATuta = function(){
	return ("The SUVAT Displacement Function\n" +
			"Inputs are: Initial Velocity, Time, Acceleration.\n" +
			"Displacement = Initial Velocity * Time + 1/2 * Acceleration * Time^2"
	);
};

/*
* SUVAT Displacement (using u, v, t)
@param {Number} Initial Velocity (u)
@param {Number} Final Velocity (v)
@param {Number} Time (t)
@return {Number}  s = 1 / 2 * (u + v) * t
*/

mechanics.SUVATuvt = function(){
	return ("The SUVAT Displacement Function\n" +
			"Inputs are: Initial Velocity, Final Velocity, Time.\n" +
			"Displacement = 1 / 2 * (Initial Velocity + Final Velocity) * Time"
	);
};

/*
* SUVAT Displacement (using a, v, t)
@param {Number} Acceleration (a)
@param {Number} Final Velocity (v)
@param {Number} Time (t)
@return {Number}  s = v * t - 1/2 * a * t^2
*/

mechanics.SUVATvta = function(){
	return ("The SUVAT Displacement Function\n" +
			"Inputs are: Acceleration, Final Velocity, Time.\n" +
			"Displacement = Final Velocity * Time - (1 / 2 * Acceleration * Time^2)"
	);
};

/*
* SUVAT Displacement (using u, a, t)
@param {Number} Initial Velocity (u)
@param {Number} Acceleration (a)
@param {Number} Time (t)
@return {Number}  v = u + a * t
*/

mechanics.SUVATuat = function(){
	return ("The SUVAT Velocity Function\n" +
			"Inputs are: Initial Velocity, Acceleration, Time.\n" +
			"Velocity = Initial Velocity + (Acceleration * Time)"
	);
};

/*
* SUVAT Displacement (using u, a, s)
@param {Number} Initial Velocity (u)
@param {Number} Acceleration (a)
@param {Number} Dispalcement (s)
@return {Number}  v^2 = u^2 + 2 * a * s (Returns v^2 not v)
*/

mechanics.SUVATuas = function(){
	return ("The SUVAT Velocity Function\n" +
			"Inputs are: Initial Velocity, Acceleration, Displacement.\n" +
			"Velocity^2 = (Initial Velocity)^2 + (2 * Acceleration * Displacement)"
	);
};

/*
* Calculated SUVAT Displacement (using u, a, s)
@param {Number} Initial Velocity (u)
@param {Number} Acceleration (a)
@param {Number} Dispalcement (s)
@return {Number}  v = SquareRoot(u^2 + 2 * a * s) (Returns v)
*/

mechanics.cSUVATuas = function(){
	return ("The SUVAT Velocity Function\n" +
			"Inputs are: Initial Velocity, Acceleration, Displacement.\n" +
			"Velocity = SquareRoot((Initial Velocity)^2 + (2 * Acceleration * Displacement))"
	);
};

/*
* Impulse w/ Mass & Velocity
@param {Number} Mass (m)
@param {Number} Initial Velocity (v1)
@param {Number} Finaly Velocity (v2)
@return {Number} Impulse = Mass * Change in Velocity
*/

mechanics.impulseMass = function(){
	return ("The Impuse Function - using Mass\n" +
			"Inputs are: Mass, Initial Velocity, Final Velocity.\n" +
			"Impulse = Mass * (Final Velocity - Initial Velocity)"
	);
};

/*
* Impulse w/ Force & Times
@param {Number} Force (f)
@param {Number} Initial Time (t1)
@param {Number} Final Time (t2)
@return {Number} Impulse = Force * Change im time
*/

mechanics.impulseForce = function(){
	return ("The Impuse Function - using Force\n" +
			"Inputs are: Force, Initial Time, Final Time.\n" +
			"Impulse = Force * (Final Time - Initial Time)"
	);
};

/*
* Work
@param {Number} Force (f)
@param {Number} Displacement (s)
@param {Number} Cos(Thetha) (angle - Cosine of an angle theta)
@return {Number} Work = Force * Distance * Cos(Thetha)
*/

mechanics.workDone = function(){
	return ("The Work Done Function\n" +
			"Inputs are: Force, Displacement, Angle.\n" +
			"Work Done = Force * Displacement * cos(Angle)"
	);
};

/*
* Kinetic Energy w/ Velocity
@param {Number} Velocity (v)
@param {Number} Mass (m)
@return {Number} Kinetic Energy = 1/2 * m * v^2
*/

mechanics.kineticVelocity = function(){
	return ("The Kinetic Energy Equation - with Velocity\n" +
			"Inputs are: Velocity, Mass.\n" +
			"Kinetic Energy = 1/2 * Mass * Velocity^2"
	);
};

/*
* Kinetic Energy w/ Momentum
@param {Number} Momentum (p)
@param {Number} Mass (m)
@return {Number} Kinetic Energy = (p^2) / (2 * m)
*/

mechanics.kineticMomentum = function(){
	return ("The Kinetic Energy Equation - with Momentum\n" +
			"Inputs are: Momentum, Mass.\n" +
			"Kinetic Energy = Momentum^2 * (2 * Mass)"
	);
};

/*
* Calculated Kinetic Energy Momentum
@param {Number} Velocity (v)
@param {Number} Mass (m)
@return {Number} Kinetic Energy = ((m * v)^2) / (2 * m)
*/

mechanics.cKineticMomentum = function(){
	return ("The Calculated Kinetic Energy Equation - with Momentum\n" +
			"Inputs are: Velocity, Mass.\n" +
			"Kinetic Energy = Momentum(Mass, Velocity) * (2 * Mass)"
	);
};

/*
* Potential Energy
@param {Number} Mass (m)
@param {Number} Initial Height (h1)
@param {Number} Final Height (h2)
@return {Number} Potential Energy = Mass * Gravitational Field Strength * Change in Height
*/

mechanics.potential = function(){
	return ("The Potential Energy Equation\n" +
			"Inputs are: Mass, Initial Height, Final Height.\n" +
			"Potential Energy = Mass * Gravitational Constant * (Final Height - Initial Height)"
	);
};

/*
* Calculated Potential Energy (Entering own g)
@param {Number} Mass (m)
@param {Number} Gravitational Field Strength (g)
@param {Number} Initial Height (h1)
@param {Number} Final Height (h2)
@return {Number} Potential Energy = Mass * Gravitational Field Strength * Change in Height
*/

mechanics.cPotential = function(){
	return ("The Calculated Potential Energy Equation\n" +
			"Inputs are: Mass, Gravitational Constant, Initial Height, Final Height.\n" +
			"Potential Energy = Mass * Gravitational Constant * (Final Height - Initial Height)"
	);
};

/*
* Power
@param {Number} Force (f)
@param {Number} Velocity (v)
@return {Number} Power = Force * Velocity
*/

mechanics.power = function(){
	return ("The Power Equation\n" +
			"Inputs are: Force, Velocity.\n" +
			"Power = Force * Velocity"
	);
};

/*
* Centripetal Acceleration w/ Velocity
@param {Number} Velocity (v)
@param {Number} r (radius)
@return {Number} Acceleration = Velocity^2 / Radius
*/

mechanics.centripetalVelocity = function(){
	return ("The Centripetal Acceleration Equation - with Velocity\n" +
			"Inputs are: Velocity, Radius.\n" +
			"Centripetal Acceleration = Velocity^2 / Radius"
	);
};

/*
* Centripetal Acceleration w/ Velocity (Entering v^2)
@param {Number} Velocity (v)
@param {Number} r (radius)
@return {Number} Acceleration = Velocity^2 / Radius
*/

mechanics.cCentripetalVelocity = function(){
	return ("The Calculated Centripetal Acceleration Equation - with Velocity\n" +
			"Inputs are: Velocity^2, Radius.\n" +
			"Centripetal Acceleration = Velocity / Radius"
	);
};

/*
* Centripetal Acceleration w/ Time
@param {Number} Radius (r)
@param {Number} Time (t)
@return {Number} Acceleration = 4 * Pi^2 * r / (t^2)
*/

mechanics.centripetalTime = function(){
	return ("The Centripetal Acceleration Equation - with Time\n" +
			"Inputs are: Radius, Time.\n" +
			"Centripetal Acceleration = (4 * Pi^2 * Radius) / (Time^2)"
	);
};

/*
* Calculated Centripetal Acceleration w/ Time (Self calculating t^2)
@param {Number} Radius (r)
@param {Number} Time (t)
@return {Number} Acceleration = 4 * Pi^2 * r / (t^2)
*/

mechanics.cCentripetalTime = function(){
	return ("The Calculated Centripetal Acceleration Equation - with Time\n" +
			"Inputs are: Radius, Time.\n" +
			"Centripetal Acceleration = (4 * Pi^2 * Radius) / (Time^2)"
	);
};