/**
* information.fields.js
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
* (16 functions)
*/

var ifields = exports;

ifields.gravitationalForce = function(){
	return ("Gravitational Force\n" +
			"Inputs: Mass of First Object, Mass of Second Object, Radius\n" +
			"Gravitational Force = Gravitational Constant * ((Mass of First Object * Mass of Second Object) / Radius^2)" 
	);
};

ifields.selfGravitationalForce = function(){
	return ("Gravitational Force\n" +
			"Inputs: Mass of First Object, Mass of Second Object, Radius, Gravitation Constant\n" +
			"You've to input the Gravitational Constant yourself\n" +
			"Gravitational Force = Gravitational Constant * ((Mass of First Object * Mass of Second Object) / Radius^2)" 
	);
};

ifields.coulombForce = function(){
	return ("Coulomb's Law\n" +
			"Inputs: Charge of First Object, Charge of Second Object, Radius\n" +
			"Gravitational Force = Coulombs Constant * ((Charge of First Object * Charge of Second Object) / Radius^2)" 
	);
};

ifields.selfCoulombForce = function(){
	return ("Calculated Coulomb's Law\n" +
			"Inputs: Charge of First Object, Charge of Second Object, Radius, Coulomb constant\n" +
			"Gravitational Force = Coulombs Constant * ((Charge of First Object * Charge of Second Object) / Radius^2)" 
	);
};

ifields.gravitationalAcceleration = function(){
	return ("Gravitational Acceleration\n" +
			"Inputs: Force, Mass\n" +
			"Acceleration = Force / Mass" 
	);
};

ifields.electricField = function(){
	return ("Electric Field\n" +
			"Inputs: Force, Charge\n" +
			"Acceleration = Force / Charge" 
	);
};

ifields.gradElectricField = function(){
	return ("Electric Field from change in Electric potential energy V with respect to position\n" +
			"Inputs: Two Electric potential energys (v1, v2), Two Positions (x1, x2)\n" +
			"Electric Field Strength = - (v2 - v1) / (x2 - x1)" 
	);
};

ifields.gradGravField = function(){
	return ("Gravitational Field from change in Gravitational potential energy V with respect to position\n" +
			"Inputs: Two Gravitational potential energys (v1, v2), Two Positions (x1, x2)\n" +
			"Gravitational Field Strength = - (u2 - u1) / (x2 - x1)" 
	);
};

ifields.particleMagneticForce = function(){
	return ("Magnetic force F exerted on a particle passing through B-field\n" +
			"Inputs: Charge, Velocity, B-field strength, Angle between B-field and path of particle (degree)\n" +
			"Force = Charge * Velocity * B-field strength * sin(Angle)" 
	);
};

ifields.conductorMagneticForce = function(){
	return ("Magnetic force F exerted on a current-carrying conductor in a B-field\n" +
			"Inputs: B-field strength, Current, Length, Angle between B-field and path of particle (degrees)\n" +
			"Force = B-field strength * Current * Length * sin(Angle)" 
	);
};

ifields.particleGravitationalPotentialEnergy = function(){
	return ("Gravitational potential energy of a particle m in a gravitatonal field formed by a body of mass M\n" +
			"Inputs: Particle mass, Source mass, Seperation from source mass\n" +
			"Gravitational potential energy = - Gravitational Constant * (Particle mass * Source mass / Seperation from source mass)" 
	);
};

ifields.selfparticleGravitationalPotentialEnergy = function(){
	return ("Calculated Gravitational potential energy of a particle m in a gravitatonal field formed by a body of mass M\n" +
			"Inputs: Particle mass, Source mass, Seperation from source mass, Gravitational Constant\n" +
			"Gravitational potential energy = - Gravitational Constant * (Particle mass * Source mass / Seperation from source mass)" 
	);
};

ifields.gravitationalPotentialEnergy = function(){
	return ("Gravitational potential energy of an arbitrary pont in a gravitatonal field formed by a body of mass M\n" +
			"Inputs: Source mass, Seperation from source mass\n" +
			"Gravitational potential energy = - Gravitational Constant * (Source mass / Seperation from source mass)" 
	);
};

ifields.escapeVelocity = function(){
	return ("Velocity required for a body of to escape the orbit of a planet of mass M\n" +
			"Inputs: Mass of planet, Radius of planet\n" +
			"Escape Velocity = sqrt(2 * Gravitational Constant (Mass of planet / Radius of planet))" 
	);
};

ifields.chargeElectricPotentialEnergy = function(){
	return ("Electric potential of a test charge q in an electric field formed by a charge Q at a distance r\n" +
			"Inputs: Test charge, Source charge, Separation\n" +
			"Electric potential = (Coulomb Constant * Test charge * Test charge)/ Separation" 
	);
};

ifields.electricPotentialEnergy = function(){
	return ("Electric potential of an arbitrary point in an electric field formed by a charge Q at a distance r\n" +
			"Inputs: Source charge, Separation\n" +
			"Electric potential = (Coulomb Constant * Test charge)/ Separation" 
	);
};