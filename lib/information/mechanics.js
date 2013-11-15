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
* (24 functions)
*/

mechanics = exports;

mechanics.momentum = function(){
	return ("The Momentum Function\n" +
			"Inputs are: Mass & Velocity.\n" +
			"Momentum = Mass * Velocity." 
	);
};

mechanics.force = function(){
	return ("The Force Function\n" +
			"Input is: Mass.\n" +
			"Force = Mass * Acceleration."
	);
};

mechanics.selfForce = function(){
	return ("The Calculated Force Function\n" +
			"Inputs are: Mass, and Acceleration.\n" +
			"You have to input your own Gravitation Acceleration\n" +
			"Force = Mass * Acceleration."
	);
};

mechanics.forceMomentum = function(){
	return ("The Calculated Force Equation - using Momentum\n" +
			"Inputs are: Initial Momentum: Initial Velocity, Initial Mass, Final Momentum: Final Velocity, Finaly Mass, Initial Time, Final Time.\n" +
			"Force = (Momentum(Final Mass, Final Velocity) - Momentum(Initial Mass, Initial Velocity)) / (Final Time - Initial Time)"
	);
};

mechanics.selfForceMomentum = function(){
	return ("The Force Equation - using Momentum\n" +
			"Inputs are: Initial Momentum, Final Momentum, Initial Time, Final Time.\n" +
			"Force = (Final Momentum - Initial Momentum) / (Final Time - Initial Time)"
	);
};

mechanics.SUVATuta = function(){
	return ("The SUVAT Displacement Function\n" +
			"Inputs are: Initial Velocity, Time, Acceleration.\n" +
			"Displacement = Initial Velocity * Time + 1/2 * Acceleration * Time^2"
	);
};

mechanics.SUVATuvt = function(){
	return ("The SUVAT Displacement Function\n" +
			"Inputs are: Initial Velocity, Final Velocity, Time.\n" +
			"Displacement = 1 / 2 * (Initial Velocity + Final Velocity) * Time"
	);
};

mechanics.SUVATvta = function(){
	return ("The SUVAT Displacement Function\n" +
			"Inputs are: Acceleration, Final Velocity, Time.\n" +
			"Displacement = Final Velocity * Time - (1 / 2 * Acceleration * Time^2)"
	);
};

mechanics.SUVATuat = function(){
	return ("The SUVAT Velocity Function\n" +
			"Inputs are: Initial Velocity, Acceleration, Time.\n" +
			"Velocity = Initial Velocity + (Acceleration * Time)"
	);
};

mechanics.SUVATuas = function(){
	return ("The SUVAT Velocity Function\n" +
			"Inputs are: Initial Velocity, Acceleration, Displacement.\n" +
			"Velocity^2 = (Initial Velocity)^2 + (2 * Acceleration * Displacement)"
	);
};

mechanics.selfSUVATuas = function(){
	return ("The SUVAT Velocity Function\n" +
			"Inputs are: Initial Velocity, Acceleration, Displacement.\n" +
			"Velocity = SquareRoot((Initial Velocity)^2 + (2 * Acceleration * Displacement))"
	);
};

mechanics.impulseMass = function(){
	return ("The Impuse Function - using Mass\n" +
			"Inputs are: Mass, Initial Velocity, Final Velocity.\n" +
			"Impulse = Mass * (Final Velocity - Initial Velocity)"
	);
};

mechanics.impulseForce = function(){
	return ("The Impuse Function - using Force\n" +
			"Inputs are: Force, Initial Time, Final Time.\n" +
			"Impulse = Force * (Final Time - Initial Time)"
	);
};

mechanics.workDone = function(){
	return ("The Work Done Function\n" +
			"Inputs are: Force, Displacement, Angle.\n" +
			"Work Done = Force * Displacement * cos(Angle)"
	);
};

mechanics.kineticVelocity = function(){
	return ("The Kinetic Energy Equation - with Velocity\n" +
			"Inputs are: Velocity, Mass.\n" +
			"Kinetic Energy = 1/2 * Mass * Velocity^2"
	);
};

mechanics.kineticMomentum = function(){
	return ("The Calculated Kinetic Energy Equation - with Momentum\n" +
			"Inputs are: Velocity, Mass.\n" +
			"Kinetic Energy = Momentum(Mass, Velocity) / (2 * Mass)"
	);
};

mechanics.selfKineticMomentum = function(){
	return ("The Kinetic Energy Equation - with Momentum\n" +
			"Inputs are: Momentum, Mass.\n" +
			"You have to input the Momentum:\n" +
			"Kinetic Energy = Momentum^2 * (2 * Mass)"
	);
};

mechanics.potential = function(){
	return ("The Potential Energy Equation\n" +
			"Inputs are: Mass, Initial Height, Final Height.\n" +
			"Potential Energy = Mass * Gravitational Constant * (Final Height - Initial Height)"
	);
};

mechanics.selfPotential = function(){
	return ("The Calculated Potential Energy Equation\n" +
			"Inputs are: Mass, Gravitational Constant, Initial Height, Final Height.\n" +
			"You have to input your own Gravitational Constant\n" +
			"Potential Energy = Mass * Gravitational Constant * (Final Height - Initial Height)"
	);
};

mechanics.power = function(){
	return ("The Power Equation\n" +
			"Inputs are: Force, Velocity.\n" +
			"Power = Force * Velocity"
	);
};

mechanics.centripetalVelocity = function(){
	return ("The Centripetal Acceleration Equation - with Velocity\n" +
			"Inputs are: Velocity, Radius.\n" +
			"Centripetal Acceleration = Velocity^2 / Radius"
	);
};

mechanics.selfCentripetalVelocity = function(){
	return ("The Calculated Centripetal Acceleration Equation - with Velocity\n" +
			"Inputs are: Velocity^2, Radius.\n" +
			"You input the Velocity^2\n" +
			"Centripetal Acceleration = Velocity / Radius"
	);
};

mechanics.centripetalTime = function(){
	return ("The Centripetal Acceleration Equation - with Time\n" +
			"Inputs are: Radius, Time.\n" +
			"Centripetal Acceleration = (4 * Pi^2 * Radius) / (Time^2)"
	);
};

mechanics.selfCentripetalTime = function(){
	return ("The Calculated Centripetal Acceleration Equation - with Time\n" +
			"Inputs are: Radius, Time.\n" +
			"Centripetal Acceleration = (4 * Pi^2 * Radius) / (Time^2)"
	);
};