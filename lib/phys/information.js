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

information = exports;
information.mechanics = exports;
information.suvat = exports;
information.thermal = exports;

// Pure Physics Library - Mechanics

/*
* Momentum
@param {Number} Mass (m)
@param {Number} Velocity (v)
@return {Number} Momentum = Mass * Velocity
*/

information.mechanics.momentum = function(){
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

information.mechanics.force = function(){
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

information.mechanics.cForce = function(){
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

information.mechanics.forceMomentum = function(){
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

information.mechanics.cForceMomentum = function(){
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

information.mechanics.SUVATuta = function(){
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

information.mechanics.SUVATuvt = function(){
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

information.mechanics.SUVATvta = function(){
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

information.mechanics.SUVATuat = function(){
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

information.mechanics.SUVATuas = function(){
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

information.mechanics.cSUVATuas = function(){
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

information.mechanics.impulseMass = function(){
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

information.mechanics.impulseForce = function(){
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

information.mechanics.workDone = function(){
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

information.mechanics.kineticVelocity = function(){
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

information.mechanics.kineticMomentum = function(){
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

information.mechanics.cKineticMomentum = function(){
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

information.mechanics.potential = function(){
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

information.mechanics.cPotential = function(){
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

information.mechanics.power = function(){
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

information.mechanics.centripetalVelocity = function(){
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

information.mechanics.cCentripetalVelocity = function(){
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

information.mechanics.centripetalTime = function(){
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

information.mechanics.cCentripetalTime = function(){
	return ("The Calculated Centripetal Acceleration Equation - with Time\n" +
			"Inputs are: Radius, Time.\n" +
			"Centripetal Acceleration = (4 * Pi^2 * Radius) / (Time^2)"
	);
};

// Applied Physics Library - SUVAT

/*
* Creating an object for the SUVAT specification
*/

information.suvat.SUVAT = function(){
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

information.suvat.create = function(){
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

information.suvat.solve = function(){
	return ("Solve SUVAT Equations\n" +
			"Inputs are: None\n" +
			"Returns Solved Equation Result"
	);
};

// Pure Physics Library - Thermal Physics

/*
* Pressure
@param {Number} Force (f)
@param {Number} Area (a)
@return {Number} Pressure = Force / Area
*/

information.thermal.pressure = function(){
	return ("Pressure Equation\n" +
			"Inputs are: Force, Area\n" +
			"Pressure = Force / Area"
	);
};

/*
* Heat
@param {Number} Mass (m)
@param {Number} Specific Heat Capacity (shc)
@param {Number} Change in Temperature (t)
@return {Number} Q = m * c * t
*/

information.thermal.heat = function(){
	return ("Heat Equation\n" +
			"Inputs are: Mass, Specific Heat Capacity, Change in Temperature\n" +
			"Heat = Mass * Specific Heat Capacity, Change in Temperature"
	);
};

/*
* Calculated Heat
@param {Number} Mass (m)
@param {Number} Specific Heat Capacity (shc)
@param {Number} Temperature One (t1)
@param {Number} Temperature Two (t2)
@return {Number} Q = m * c * (t2 - t1)
*/

information.thermal.cHeat = function(){
	return ("Calculated Heat Equation\n" +
			"Inputs are: Mass, Specific Heat Capacity, Initial Time, Final Time\n" +
			"Heat = Mass * Specific Heat Capacity, (Final Time - Initial Time)"
	);
};

/*
* Latent Heat of Vaporization or Fusion
@param {Number} Mass (m)
@param {Number} V or F (Vaporization or Fusion) (l)
@return {Number} Q = Mass * Latent Heat of Fusion or Vaporization
*/

information.thermal.latentHeat = function(){
	return ("Latent Heat Equation\n" +
			"Inputs are: Mass, Latent Heat of Fusion or Vaporization\n" +
			"Heat = Mass * Latent Heat of Fusion or Vaporization"
	);
};

/*
* The Ideal Gas Equation
@param {Number} Number of moles (n)
@param {Number} The temperature in Kelvin (t)
@return {Number} P * V = n * r * t
*/

information.thermal.idealGasPV = function(){
	return ("Ideal Gas Equation\n" +
			"Inputs are: Number of Moles, Temperature\n" +
			"Pressure * Volume = Number of Moles * Gas Constant * Time"
	);
};

/*
* Thermodynamics Work Equation
@param {Number} Pressure (p)
@param {Number} Volume (v)
@return {Number} W = P * V (Already change in Volume)
*/

information.thermal.work = function(){
	return ("Work Done Equation\n" +
			"Inputs are: Pressure, Volume\n" +
			"Work = Pressure * Volume"
	);
};

/*
* Calculated Thermodynamics Work Equation
@param {Number} Pressure (p)
@param {Number} Initial Volume (v1)
@param {Number} Final Volume (v2)
@return {Number} W = P * (v2 - v1)
*/

information.thermal.cWork = function(){
	return ("Calculated Work Done Equation\n" +
			"Inputs are: Pressure, Initial Volume, Final Volume\n" +
			"Work = Pressure * (Final Volume - Initial Volume)"
	);
};

/*
* Heat Relation Equation
@param {Number} Work Done (W)
@param {Number} Internal Energy Change (U)
@return {Number} Q = (Change in) U * W
*/

information.thermal.heatChange = function(){
	return ("Heat Change Equation\n" +
			"Inputs are: Work Done, Internal Energy Change\n" +
			"Heat = Change in Energy Change * Work Done"
	);
};

/*
* Calculated Heat Relation Equation
@param {Number} Work Done (W)
@param {Number} Internal Energy Change (U)
@return {Number} Q = (Change in) U * W
*/

information.thermal.cHeatChange = function(){
	return ("Calculated Heat Change Equation\n" +
			"Inputs are: Work Done, Initial Energy Change, Final Energy Change\n" +
			"Heat = (Final Energy Change - Initial Energy Change) * Work Done"
	);
};