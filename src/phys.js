;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = require('./lib/phys.js');
},{"./lib/phys.js":9}],2:[function(require,module,exports){
/**
* about.js
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

about = exports;

about.understand = function(){
	return ("Name: The name of the Function\n" +
			"Inputs: The inputs you need for the Function\n" +
			"Equation: The mathematical equation of the Function" 
	);
};
},{}],3:[function(require,module,exports){

},{}],4:[function(require,module,exports){
module.exports=require(3)
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
module.exports=require(3)
},{}],7:[function(require,module,exports){
/**
* thermal.js
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

thermal = exports;

/*
* Pressure
@param {Number} Force (f)
@param {Number} Area (a)
@return {Number} Pressure = Force / Area
*/

thermal.pressure = function(){
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

thermal.heat = function(){
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

thermal.cHeat = function(){
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

thermal.latentHeat = function(){
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

thermal.idealGasPV = function(){
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

thermal.work = function(){
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

thermal.cWork = function(){
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

thermal.heatChange = function(){
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

thermal.cHeatChange = function(){
	return ("Calculated Heat Change Equation\n" +
			"Inputs are: Work Done, Initial Energy Change, Final Energy Change\n" +
			"Heat = (Final Energy Change - Initial Energy Change) * Work Done"
	);
};
},{}],8:[function(require,module,exports){
module.exports=require(3)
},{}],9:[function(require,module,exports){
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

// Information Library
phys.information = require('./information/about');
phys.information.mechanics = require('./information/mechanics');
phys.information.thermal = require('./information/thermal');
phys.information.wave = require('./information/wave');
phys.information.fields = require('./information/fields');
phys.information.electromagnetic = require('./information/electromagnetic');
phys.information.quantum = require('./information/quantum');

// Pure Formulas
phys.basic = require('./phys/basic');
phys.mechanics = require('./phys/mechanics');
phys.thermal = require('./phys/thermal');
phys.wave = require('./phys/wave');
phys.fields = require('./phys/fields');
phys.electromagnetic = require('./phys/electromagnetic');
phys.quantum = require('./phys/quantum');
},{"./information/about":2,"./information/electromagnetic":3,"./information/fields":4,"./information/mechanics":5,"./information/quantum":6,"./information/thermal":7,"./information/wave":8,"./phys/basic":10,"./phys/constants/constants":11,"./phys/constants/multiplier":12,"./phys/constants/units":13,"./phys/electromagnetic":14,"./phys/fields":15,"./phys/mechanics":16,"./phys/quantum":17,"./phys/thermal":18,"./phys/wave":19}],10:[function(require,module,exports){
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
*/

var basic = exports;

// Change in numbers
/*
@param {Number} Number1 (p1)
@param {Number} Number2 (p2)
@return {Number} Difference between Number1 & Number2
*/

basic.changein = function (p1, p2, callback) {
  var ans = (p2 - p1);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Two Decimal Figures
/*
@param {Number} Number (number)
@return {Number} Converts the number to have 2 decimal places
*/

basic.twosig = function (number, callback) {
  var ans = (number.toFixed(2));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Radians To Degrees
/*
@param {Number} Number (number)
@return {Number} Converts Radians to Degrees
*/

basic.toDegrees = function(radians, callback) {
  var degrees = radians * (180 / Math.PI);
  if (typeof (callback) === 'function') {
    callback(degrees);
    return (degrees);
  }
  return degrees;
};

// Degrees to Radians
/*
@param {Number} Number (number)
@return {Number} Converts degrees to Radians
*/

basic.toRadians = function(degrees, callback) {
  var radians = degrees * (Math.PI / 180);
  if (typeof (callback) === 'function') {
    callback(radians);
    return (radians);
  }
  return radians;
};
},{}],11:[function(require,module,exports){
/**
* constants.js
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

var constants = exports;
var multiplier = require('./multiplier');

/*
* Gravitational Acceleration
* Gravitational acceleration is the acceleration on an object caused by force of gravitation
* http://en.wikipedia.org/wiki/Gravitational_acceleration
*/
constants.gAcceleration = 9.81;
constants.gAccelerationUnit = "ms^-2";

/*
* Gravitational Constant
* An empirical physical constant involved in the calculation(s) of gravitational force between two bodies
* http://en.wikipedia.org/wiki/Gravitational_constant
*/
constants.GravitationalConstant = 6.67 * Math.pow(10, -11);
constants.GravitationalConstantUnit = "Nm^2kg^-2";

/*
* Avogadro constant
* Number of constituent particles in one mole of a given substance
* http://en.wikipedia.org/wiki/Avogadro_constant
*/
constants.AvogadrosConstant = 6.02 * Math.pow(10, 23);
constants.AvogadrosConstantUnit = "mol^-1";


/*
* Gas constant
* http://en.wikipedia.org/wiki/Gas_constant
*/
constants.GasConstant = 8.31;
constants.GasConstantUnit = "J/K^-1mol^-1";
	
/*
* Boltzmanns constant
*/	
constants.BoltzmannsConstant = 1.38 * Math.pow(10, -23);
constants.BoltzmannsConstantUnit = "JK^-1";
	
/*
* Stefan Boltzmann constant
*/	
constants.StefanBoltzmannConstant = 5.67 * Math.pow(10, -8);
constants.StefanBoltzmannConstantUnit = "Wm^-2K^-4";
	
/*
* Coulomb constant
*/	
constants.CoulombConstant = 8.99 * Math.pow(10, 9);
constants.CoulombConstantUnit = "Nm^2C^-2";

/*
* Permittivity of Free Space
*/
constants.PermittivityFreeSpace = 8.85 * Math.pow(10, -12);
constants.PermittivityFreeSpaceUnit = "C^2N^-1m^-2";

/*
* Permeability of Free Space
*/	
constants.PermeabilityFreeSpace = 4 * Math.PI * Math.pow(10, -7);
constants.PermeabilityFreeSpaceUnit = "TmA^-1";

/*
* Speed of Light in a Vacuum
*/	
constants.SpeedofLightVacuum = 3.00 * Math.pow(10, 8);
constants.SpeedofLightVacuumUnit = "ms^-1";

/*
* Plancks Constant
*/	
constants.PlancksConstant = 6.63 * Math.pow(10, -34);
constants.PlancksConstantUnit = "Js";
	
/*
* Elementary Charge
*/
constants.ElementaryCharge = 1.60 * Math.pow(10, -19);
constants.ElementaryChargeUnit = "C";
	
/*
* Electron Rest Mass in KG
*/
constants.ElectronRestMassKG = 9.110 * Math.pow(10, -31);
constants.ElectronRestMassKGUnit = "kg";

/*
* Electron Rest Mass in U
*/	
constants.ElectronRestMassU = 0.000549;
constants.ElectronRestMassUUnit = "u";

/*
* Electron Rest Mass in eV
*/	
constants.ElectronRestMasseV = 0.511 * multiplier.M;
constants.ElectronRestMasseVUnit = "eVc^-2";

/*
* Proton Rest Mass in KG
*/	
constants.ProtonRestMassKG = 1.673 * Math.pow(10, -27);
constants.ProtonRestMassKGUnit = "kg";

/*
* Proton Rest Mass in U
*/	
constants.ProtonRestMassU = 1.007276;
constants.ProtonRestMassUUnit = "u";

/*
* Proton Rest Mass in eV
*/
constants.ProtonRestMasseV = 938 * multiplier.M;
constants.ProtonRestMasseVUnit = "eVc^-2";

/*
* Neutron Rest Mass in KG
*/	
constants.NeutronRestMassKG = 1.675 * Math.pow(10, -27);
constants.NeutronRestMassKGUnit = "kg";

/*
* Neutron Rest Mass in U
*/	
constants.NeutronRestMassU = 1.008665;
constants.NeutronRestMassUUnit = "u";

/*
* Neutron Rest Mass in eV
*/	
constants.NeutronRestMasseV = 940 * multiplier.M;
constants.NeutronRestMasseVUnit = "eVc^-2";

/*
* Unified Atomic Mass in KG
*/	
constants.UnifiedAtomicMassKG = 1.661 * Math.pow(10, -27);
constants.UnifiedAtomicMassKGUnit = "kg";
	
/*
* Unified Atomic Mass in eV
*/	
constants.UnifiedAtomicMasseV = 931.5 * multiplier.M;
constants.UnifiedAtomicMasseVUnit = "eVc^-2";
},{"./multiplier":12}],12:[function(require,module,exports){
/**
* multiplier.js
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

var multiplier = exports;

/*
* Tera
* number x 10^12
*/

multiplier.T = Math.pow(10, 12);

/*
* Giga
* number x 10^9
*/

multiplier.G = Math.pow(10, 9);

/*
* Mega
* number x 10^6
*/

multiplier.M = Math.pow(10, 6);

/*
* Kilo
* number x 10^3
*/

multiplier.k = Math.pow(10, 3);

/*
* Hecto
* number x 10^2
*/

multiplier.h = Math.pow(10, 2);

/*
* Deca
* number x 10^1
*/

multiplier.da = Math.pow(10, 1);

/*
* Deci
* number x 10^-1
*/

multiplier.d = Math.pow(10, -1);

/*
* Centi
* number x 10^-2
*/

multiplier.c = Math.pow(10, -2);

/*
* Milli
* number x 10^-3
*/

multiplier.m = Math.pow(10, -3);

/*
* Micro
* number x 10^-6
* Micro is actually "µ", which is greek for mikrós - meaning "small".
* It has been changed to "u" to simplify its use.
* http://en.wikipedia.org/wiki/Micro-
*/

multiplier.u = Math.pow(10, -6);

/*
* Nano
* number x 10^-9
*/

multiplier.n = Math.pow(10, -9);

/*
* Pico
* number x 10^-12
*/

multiplier.p = Math.pow(10, -12);

/*
* Femto
* number x 10^-15
*/

multiplier.f = Math.pow(10, -15);
},{}],13:[function(require,module,exports){
/**
* units.js
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

var units = exports,
multiplier = require('./multiplier');

/*
* Light Year
* The distance that light travels in a vacuum in one Julian year.
* https://en.wikipedia.org/wiki/Light-year 
*/
units.lightyear = 9.46 * Math.pow(10, 15);
units.lightyearUnit = "m";

/*
* Parsec
* A unit of length used in astronomy, equal to about 30.9 trillion kilometres or 3.26 light-years.
* http://en.wikipedia.org/wiki/Parsec
*/
units.parsec = 3.261;
units.parsecUnit = "y";

/*
* Astronomical unit
* A unit of length now defined as exactly 149,597,870,700 m or roughly the average Earth–Sun distance.
* https://en.wikipedia.org/wiki/Astronomical_unit
*/
units.astronomical = 1.50 * Math.pow(10, 11);
units.astronomicalUnit = "m";

/*
* Radian
* The standard unit of angular measure.
* http://en.wikipedia.org/wiki/Radian
*/
units.radian = (180 / Math.Pi);
units.radianUnit = "Degrees";

/*
* Kilowatt hour
* A unit of energy equal to 1000 watt hours or 3.6 megajoules.
* http://en.wikipedia.org/wiki/Kilowatt_hour
*/
units.kilowatthour = 3.60 * Math.pow(10, 6);
units.kilowatthourUnit = "J";

/*
* Atmosphere Unit (Newton Meter)
* The standard atmosphere (symbol: atm) is an international reference pressure defined as 101325 Pa and formerly used as a unit of pressure.
* https://en.wikipedia.org/wiki/Atmosphere_(unit)
*/
units.atmNM = 1.01 * Math.pow(10, 5);
units.atmNMUnit = "Nm^-2";

/*
* Atmosphere Unit (Pascal)
* The standard atmosphere (symbol: atm) is an international reference pressure defined as 101325 Pa and formerly used as a unit of pressure.
* https://en.wikipedia.org/wiki/Atmosphere_(unit)
*/
units.atmPa = 101 * multiplier.k;
units.atmPaUnit = "Pa";

/*
* Atmosphere Unit (HG unit of pressure)
* The standard atmosphere (symbol: atm) is an international reference pressure defined as 101325 Pa and formerly used as a unit of pressure.
* https://en.wikipedia.org/wiki/Atmosphere_(unit)
* mmHG unit is "Millimeters of Mercury"
*/
units.atmHG = 760;
units.atmHGUnit = "mmHg";
},{"./multiplier":12}],14:[function(require,module,exports){
/**
 * electromagnetic.js
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

var constant = require('./constants/constants');
var units = require('./constants/units');
var multiplier = require('./constants/multiplier');
var basic = require('./basic');
var electromagnetic = exports;

// Rate at which charge flows through a given surface
/*
@param {Number} Charge (q1, q2)
@param {Number} Time (t1, t2)
@return {Number} current I = dQ / dt
*/

electromagnetic.current = function (q1, q2, t1, t2) {
  var ans = basic.changein(q1, q2) / basic.changein(t1, t2);
  return ans;
};

// Resistance of an Ohmic resistor
/*
@param {Number} Voltage (V)
@param {Number} Current (I)
@return {Number} Resistance R = V / I
*/

electromagnetic.ohmicResistance = function (V, I) {
  var ans = V / I;
  return ans;
};

// Resistivity - tendancy of a material to resist charge
/* 
@param {Number} Resistance (R)
@param {Number} Cross-sectional area (A)
@param {Number} Length (L)
@return {Number} Resistivity res = R * A / L
*/

electromagnetic.resistivity = function (R, L, A) {
  var ans = R * A / L;
  return ans;
};

// Power - Energy consumed per unit time
/*
@param {Number} Voltage (V)
@param {Number} Current (I)
@return {Number} Power P = V * I
*/

electromagnetic.viPower = function (V, I) {
  var ans = V * I;
  return ans;
};

// Power - Energy consumed per unit time
/*
@param {Number} Current (I)
@param {Number} Resistance (V)
@return {Number} Power P = I ^ 2 * R
*/

electromagnetic.irPower = function (I, R) {
  var ans = Math.pow(I, 2) * R;
  return ans;
};

// Electromotive Force - Voltage generated by a battery
/*
@param {Number} Current (I)
@param {Number} Resistance (R)
@param {Number} Internal resistance of battery (r)
@return {Number} emf = I(R + r)
*/

electromagnetic.emf = function (I, R, r) {
  var ans = I * (R + r);
  return ans;
};

// Sum of resistance components connected in series
/*
@param {Number} Array of resistance values (resistances)
@return {Number} sumResistance = R_0 + R_1 + ... + R_(n - 1)
*/

electromagnetic.series = function (resistances) {
  var sumResistance = 0;
  for (var resistance in resistances) {
  		sumResistance += resistance;
  }
  return sumResistance;
};

// Sum of resistance components connected in parallel
/*
@param {Number} Array of resistance values (resistances)
@return {Number} sumResistance = R_0 + R_1 + ... + R_(n - 1)
*/

electromagnetic.parallel = function (resistances) {
  var sumResistance = 0;
  for (var resistance in resistances) {
  		sumResistance += (1 / resistance);
  }
  return (1 / sumResistance);
};

// Component of B-field passing through a surface area A at an angle
/*
@param {Number} B-field Strength (B)
@param {Number} Surface area of surface (A)
@param {Number} Angle (in degrees) (theta)
@return {Number} magFlux = B * A * cos(theta)
*/

electromagnetic.fluxComponent = function (B, A, theta) {
  var magflux = B * A * Math.cos(basic.toRadians(theta));
  return magFlux;
};

// Induced voltage by moving a rod of length l through a B-field of velocity v
/*
@param {Number} B-field Strength (B)
@param {Number} Velocity of rod (v)
@param {Number} Length (l)
@return {Number} inducedEmf = B * v * l
*/

electromagnetic.inducedEmf = function (B, v, l) {
  var indEmf = B * v * l;
  return indEmf;
};

// Gauss' Law: Rate of flow of electric field (Electric flux) through a closed surface with an arbitrary volume
/*
@param {Number} Total charge enclosed within the surface (Q)
@param {Number} Coulomb constant (k)
@return {Number} guassFlux = Q / k 
*/

electromagnetic.gauss = function (Q) {
  var gaussFlux = Q / constant.CoulombConstant;
  return gaussFlux;
}

// Faraday's Law: Induced emf generated by moving coil in B-field
/*
@param {Number} Number of turns in coil (n)
@param {Number} Rate of change of magnetic flux (magFlux1, magFlux 2)
@param {Number} Time interval (t1, t2)
@return {Number} coilEmf = - n * (magFlux2 - magFlux1) / (t2 - t1)
*/

electromagnetic.coilEmf = function (n, magFlux1, magFlux2, t1, t2) {
  var ans = (-1 * n) * (basic.changein(magFlux1, magFlux2)) / (basic.changein(t1, t2));
  return ans;
}
},{"./basic":10,"./constants/constants":11,"./constants/multiplier":12,"./constants/units":13}],15:[function(require,module,exports){
/**
 * fields.js
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

var constant = require('./constants/constants');
var units = require('./constants/units');
var multiplier = require('./constants/multiplier');
var basic = require('./basic');
var fields = exports;

// Gravitational Force
/*
@param {Number} Gravitation (G) - Constant
@param {Number} Mass One (mone)
@param {Number} Mass Two (mtwo)
@param {Number} radius^2 (r^2)
@return {Number} Force = G * ((mone * mtwo) / r^2)
*/

fields.gravitationalForce = function (mone, mtwo, r, callback) {
  var ans = (constant.GravitationalConstant * ((mone * mtwo) / r));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Gravitational Force
/*
@param {Number} Gravitation (G) - Constant
@param {Number} Mass of First Object (mone)
@param {Number} Mass of Second Object (mtwo)
@param {Number} radius (r)
@return {Number} Force = G * ((mone * mtwo) / r^2)
*/

fields.cGravitationalForce = function (mone, mtwo, r, callback) {
  var ans = (constant.GravitationalConstant * ((mone * mtwo) / (Math.pow(
    r, 2))));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Coulomb's Law
/*
@param {Number} Coulomb constant (k) - Constant
@param {Number} Charge of First Object (qone)
@param {Number} Charge of Second Object (qtwo)
@param {Number} radius^2 (r^2)
@return {Number} Force = k * ((qone * qtwo) / r^2)
*/

fields.CoulombForce = function (qone, qtwo, r, callback) {
  var ans = (constant.CoulombConstant * ((qone * qtwo) / r));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Coulomb's Law
/*
@param {Number} Coulomb constant (k) - Constant
@param {Number} Charge of First Object (qone)
@param {Number} Charge of Second Object (qtwo)
@param {Number} radius (r)
@return {Number} Force = k * ((qone * qtwo) / r^2)
*/

fields.cCoulombForce = function (qone, qtwo, r, callback) {
  var ans = (constant.CoulombConstant * ((qone * qtwo) / Math.pow(r,
    2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Acceleration (Gravity)
/*
@param {Number} Force (F)
@param {Number} mass (m)
@return {Number} Acceleration = F / m
*/

fields.gravitationalAcceleration = function (F, m, callback) {
  var ans = (F / m);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Electric Field
/*
@param {Number} Force (F)
@param {Number} Charge (q)
@return {Number} Electric Field = F / q
*/

fields.electricField = function (F, q, callback) {
  var ans = (F / q);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Electric Field from change in Electric potential energy V with respect to position
/*
@param {Number} Electric potential energy (v1, v2)
@param {Number} Position (x1, x2)
@return {Number} Electric Field Strength E = - (v2 - v1) / (x2 - x1)
*/

fields.gradElectricField = function (v1, v2, x1, x2, callback) {
  var ans = (-1 * basic.changein(v1, v2)) / (basic.changein(x1, x2));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Gravitational Field from change in Gravitational potential energy V with respect to position
/*
@param {Number} Gravitational potential energy (v1, v2)
@param {Number} Position (x1, x2)
@return {Number} Gravitational Field Strength g = - (u2 - u1) / (x2 - x1)
*/

fields.gradGravField = function (u1, u2, x1, x2, callback) {
  var ans = (-1 * basic.changein(u1, u2)) / (basic.changein(x1, x2));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Magnetic force F exerted on a particle passing through B-field
/*
@param {Number} Charge (q)
@param {Number} Velocity (v)
@param {Number} B-field strength (B)
@param {Number} Angle (in degrees) between B-field and path of particle (theta)
@return {Number} Force F = q * v * B * sin(theta)
*/

fields.particleMagneticForce = function(q, v, B, theta, callback) {
  var ans = (q * v * B) * Math.sin(basic.toRadians(theta));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
}

// Magnetic force F exerted on a current-carrying conductor in a B-field
/*
@param {Number} B-field strength (B)
@param {Number} Current (I)
@param {Number} Length (l)
@param {Number} Angle (in degrees) between B-field and path of particle (theta)
@return {Number} Force F = B * I * L * sin(theta)
*/

fields.conductorMagneticForce = function(B, I, l, theta, callback) {
  var ans = (B * I * l) * Math.sin(basic.toRadians(theta, callback));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
}

// Gravitational potential energy of a particle m in a gravitatonal field formed by a body of mass M
/*
@param {Number} Particle mass (m)
@param {Number} Source mass (M)
@param {Number} Seperation from source mass (r)
@return {Number} U = -G * (m * M / r)
*/

fields.particleGravitationalPotentialEnergy = function(m, M, r, callback) {
  var ans = (-1 * constant.GravitationalConstant) * (m * M / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
}

// Gravitational potential energy of an arbitrary pont in a gravitatonal field formed by a body of mass M
/*
@param {Number} Particle mass (m)
@param {Number} Source mass (M)
@param {Number} Seperation from source mass (r)
@return {Number} U = -G * (m * M / r)
*/

fields.gravitationalPotentialEnergy = function(M, r, callback) {
  var ans = (-1 * constant.GravitationalConstant) * (M / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
}

// Velocity required for a body of to escape the orbit of a planet of mass M
/*
@param {Number} Mass M of planet
@param {Number} Radius r of planet
@return {Number} v = sqrt(2G (M / r))
*/

fields.escapeVelocity = function(M, r, callback) {
  var ans = Math.sqrt((2 * constant.GravitationalConstant) * (M / r));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
}

// Electric potential of a test charge q in an electric field formed by a charge Q at a distance r
/*
@param {Number} Test charge (q)
@param {Number} Source charge (Q)
@param {Number} Separation (r)
@return {Number} U = (k * Q) / r
*/

fields.chargeElectricPotentialEnergy = function(Q, q, r, callback) {
  var ans = basic.CoulombConstant * (Q * q / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
}

// Electric potential of an arbitrary point in an electric field formed by a charge Q at a distance r
/*
@param {Number} Test charge (q)
@param {Number} Source charge (Q)
@param {Number} Separation (r)
@return {Number} U = (k * Q) / r
*/

fields.electricPotentialEnergy = function(Q, r, callback) {
  var ans = basic.CoulombConstant * (Q / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
}
},{"./basic":10,"./constants/constants":11,"./constants/multiplier":12,"./constants/units":13}],16:[function(require,module,exports){
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

var constant = require('./constants/constants');
var units = require('./constants/units');
var multiplier = require('./constants/multiplier');
var basic = require('./basic');
var mechanics = exports;

// Momentum
/*
@param {Number} Mass (m)
@param {Number} Velocity (v)
@return {Number} Momentum = Mass * Velocity
*/

mechanics.momentum = function (m, v, callback) {
  var ans = m * v;
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Force
/*
@param {Number} Mass (m)
@return {Number} Force = Mass * Acceleration
*/

mechanics.force = function (m, callback) {
  var ans = (m * constant.gAcceleration);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Force (Own Acceleration Input)
/*
@param {Number} Mass (m)
@param {Number} Acceleration (g)
@return {Number} Force = Mass * Acceleration
*/

mechanics.cForce = function (m, g, callback) {
  var ans = (m * g);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Force (Momentum over Time)
/*
@param {Number} Change in Momentum (p1, p2)
@param {Number} Change in Time (t1, t2)
@return {Number} Force = Change in Momentum / Change in Time
*/

mechanics.forceMomentum = function (p1, p2, t1, t2, callback) {
  var ans = ((basic.changein(p1, p2)) / (basic.changein(t1, t2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Force (Momentum over Time)
/*
@param {Number} Change in Momentum (m1, v1, m2, v2)
@param {Number} Change in Time (t1, t2)
@return {Number} Force = ((m2 * v2) - (m1 * v1)) / (t2 - t1)
*/

mechanics.cForceMomentum = function (m1, v1, m2, v2, t1, t2, callback) {
  var ans = ((basic.changein((mechanics.momentum(m1, v1)),
    mechanics.momentum(m2, v2))) / (basic.changein(t1, t2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// SUVAT Displacement (Using u, t, a)
/*
@param {Number} Initial Velocity (u)
@param {Number} Time (t)
@param {Number} Acceleration (a)
@return {Number} s = u * t + 1/2 * a * t^2
*/

mechanics.SUVATuta = function (u, t, a, callback) {
  var ans = ((u * t) + ((1 / 2) * a * (Math.pow(t, 2))));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// SUVAT Displacement (using u, v, t)
/*
@param {Number} Initial Velocity (u)
@param {Number} Final Velocity (v)
@param {Number} Time (t)
@return {Number}  s = (1 / 2 * (u + v)) * t
*/

mechanics.SUVATuvt = function (u, v, t, callback) {
  var ans = ((1 / 2) * ((u + v) * t));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// SUVAT Displacement (using a, v, t)
/*
@param {Number} Acceleration (a)
@param {Number} Final Velocity (v)
@param {Number} Time (t)
@return {Number}  s = v * t - 1/2 * a * t^2
*/

mechanics.SUVATvta = function (v, t, a, callback) {
  var ans = ((v * t) - ((1 / 2) * a * (Math.pow(t, 2))));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// SUVAT Displacement (using u, a, t)
/*
@param {Number} Initial Velocity (u)
@param {Number} Acceleration (a)
@param {Number} Time (t)
@return {Number}  v = u + a * t
*/

mechanics.SUVATuat = function (u, a, t, callback) {
  var ans = (u + (a * t));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// SUVAT Displacement (using u, a, s)
/*
@param {Number} Initial Velocity (u)
@param {Number} Acceleration (a)
@param {Number} Dispalcement (s)
@return {Number}  v^2 = u^2 + 2 * a * s (Returns v^2 not v)
*/

mechanics.SUVATuas = function (u, a, s, callback) {
  var ans = (Math.pow(u, 2) + (2 * a * s));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated SUVAT Displacement (using u, a, s)
/*
@param {Number} Initial Velocity (u)
@param {Number} Acceleration (a)
@param {Number} Dispalcement (s)
@return {Number}  v = SquareRoot(u^2 + 2 * a * s) (Returns v)
*/

mechanics.cSUVATuas = function (u, a, s, callback) {
  var ans = Math.sqrt(mechanics.SUVATuas(u, a, s));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Impulse w/ Mass & Velocity
/*
@param {Number} Mass (m)
@param {Number} Initial Velocity (v1)
@param {Number} Finaly Velocity (v2)
@return {Number} Impulse = Mass * Change in Velocity
*/

mechanics.impulseMass = function (m, v1, v2, callback) {
  var ans = (m * (basic.changein(v1, v2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Impulse w/ Force & Times
/*
@param {Number} Force (f)
@param {Number} Initial Time (t1)
@param {Number} Final Time (t2)
@return {Number} Impulse = Force * Change im time
*/

mechanics.impulseForce = function (f, t1, t2, callback) {
  var ans = (f * (basic.changein(t1, t2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Work
/*
@param {Number} Force (f)
@param {Number} Displacement (s)
@param {Number} Cos(Thetha) (angle - Cosine of an angle theta)
@return {Number} Work = Force * Distance * Cos(Thetha)
*/

mechanics.workDone = function (f, s, angle, callback) {
  var ans = (f * s * Math.cos(angle));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Kinetic Energy w/ Velocity
/*
@param {Number} Velocity (v)
@param {Number} Mass (m)
@return {Number} Kinetic Energy = 1/2 * m * v^2
*/

mechanics.kineticVelocity = function (v, m, callback) {
  var ans = ((1 / 2) * (m) * (Math.pow(v, 2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Kinetic Energy w/ Momentum
/*
@param {Number} Momentum (p)
@param {Number} Mass (m)
@return {Number} Kinetic Energy = (p^2) / (2 * m)
*/

mechanics.kineticMomentum = function (p, m, callback) {
  var ans = ((Math.pow(p, 2)) / (2 * m));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Kinetic Energy Momentum
/*
@param {Number} Velocity (v)
@param {Number} Mass (m)
@return {Number} Kinetic Energy = ((m * v)^2) / (2 * m)
*/

mechanics.cKineticMomentum = function (v, m, callback) {
  var ans = ((Math.pow((mechanics.momentum(m, v)), 2)) / (2 * m));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Potential Energy
/*
@param {Number} Mass (m)
@param {Number} Initial Height (h1)
@param {Number} Final Height (h2)
@return {Number} Potential Energy = Mass * Gravitational Field Strength * Change in Height
*/

mechanics.potential = function (m, h1, h2, callback) {
  var ans = ((m) * (constant.gAcceleration) * (basic.changein(h1,
    h2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Potential Energy (Entering own g)
/*
@param {Number} Mass (m)
@param {Number} Gravitational Field Strength (g)
@param {Number} Initial Height (h1)
@param {Number} Final Height (h2)
@return {Number} Potential Energy = Mass * Gravitational Field Strength * Change in Height
*/

mechanics.cPotential = function (m, g, h1, h2, callback) {
  var ans = ((m) * (g) * (basic.changein(h1, h2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Power
/*
@param {Number} Force (f)
@param {Number} Velocity (v)
@return {Number} Power = Force * Velocity
*/

mechanics.power = function (f, v, callback) {
  var ans = (f * v);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Centripetal Acceleration w/ Velocity
/*
@param {Number} Velocity (v)
@param {Number} r (radius)
@return {Number} Acceleration = Velocity^2 / Radius
*/

mechanics.centripetalVelocity = function (v, r, callback) {
  var ans = ((Math.pow(v, 2)) / (r));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Centripetal Acceleration w/ Velocity (Entering v^2)
/*
@param {Number} Velocity (v)
@param {Number} r (radius)
@return {Number} Acceleration = Velocity^2 / Radius
*/

mechanics.cCentripetalVelocity = function (v, r, callback) {
  var ans = (v / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Centripetal Acceleration w/ Time
/*
@param {Number} Radius (r)
@param {Number} Time (t)
@return {Number} Acceleration = 4 * Pi^2 * r / (t^2)
*/

mechanics.centripetalTime = function (r, t, callback) {
  var ans = ((4 * (Math.pow(Math.PI, 2)) * r) / (Math.pow(t, 2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Centripetal Acceleration w/ Time (Self calculating t^2)
/*
@param {Number} Radius (r)
@param {Number} Time (t)
@return {Number} Acceleration = 4 * Pi^2 * r / (t^2)
*/

mechanics.cCentripetalTime = function (r, t, callback) {
  var ans = ((4 * (Math.pow(Math.PI, 2)) * r) / (t));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};
},{"./basic":10,"./constants/constants":11,"./constants/multiplier":12,"./constants/units":13}],17:[function(require,module,exports){
/**
 * quantum.js
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

var constant = require('./constants/constants');
var units = require('./constants/units');
var multiplier = require('./constants/multiplier');
var basic = require('./basic');
var quantum = exports;

// Energy
/*
@param {Number} Mass
@return {Number} E = m * c^2
*/

quantum.energy = function (mass) {
  var ans = Math.pow(constant.SpeedofLightVacuum, 2) * mass;
  return ans;
};

// Energy of a quanta of light
/* 
@param {Number} Frequency (f)
@return {Number} E = hf
*/

quantum.energyLight = function (f) {
  var ans = constant.PlancksConstant * f;
  return ans;
};

// Momentum of quanta
/*
@param {Number} Wavelength (waveLen)
@return {Number} p = h / waveLen
*/

quantum.momentum = function (waveLen) {
  var ans = constant.PlancksConstant / waveLen;
  return ans;
};

// De Broglie wavelength
/*
@param {Number} Momentum (p)
@return {Number} waveLen = h / p
*/

quantum.deBroglie = function (p) {
  var ans = constant.PlancksConstant / p;
  return ans;
};

// Lower-bound to uncertainty in position
/*
@param {Number} Uncertainty in momentum (dMomentum)
@return {Number} dPosition >= (h / 4pi) * (1 / dMomentum)
*/

quantum.uncPosition = function (dMomentum) {
  var ans = constant.PlancksConstant / (4 * Math.PI * dMomentum);
  return ans;
};

// Lower-bound to uncertainty in momentum
/*
@param {Number} Uncertainty in position (dPosition)
@return {Number} dMomentum >= (h / 4pi) * (1 / dPosition)
*/

quantum.uncMomentum = function (dPosition) {
  var ans = constant.PlancksConstant / (4 * Math.PI * dPosition);
  return ans;
};

// Maximum kinetic energy of emitted electrons incident with a frequency f upon a metal with a work function W
/*
@param {Number} Work function (in Joules) (W)
@param {Number} Frequency (f)
@return {Number} K = hf - W
*/

quantum.maxKineticEnergy = function (W, f) {
  var ans = constant.PlancksConstant * f - W;
  return ans;
};

// Minimum energy required to delocalize an electron from the surface of a metal
/*
@param {Number} Threshold frequency (f0)
@return {Number} W = hf_0
*/

quantum.minWork = function (f0) {
  var ans = constant.PlancksConstant * f0;
  return ans;
};

// Minimum frequency required to induce photoelectric effect
/*
@param {Number} W
@return {Number} f_0 = W / h;
*/

quantum.thresholdFreq = function (W) {
  var ans = W / constant.PlancksConstant;
  return ans;
};
},{"./basic":10,"./constants/constants":11,"./constants/multiplier":12,"./constants/units":13}],18:[function(require,module,exports){
/**
 * thermal.js
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

var constant = require('./constants/constants');
var units = require('./constants/units');
var multiplier = require('./constants/multiplier');
var basic = require('./basic');
var thermal = exports;

// Pressure
/*
@param {Number} Force (f)
@param {Number} Area (a)
@return {Number} Pressure = Force / Area
*/

thermal.pressure = function (f, a, callback) {
  var ans = (f / a);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Heat
/*
@param {Number} Mass (m)
@param {Number} Specific Heat Capacity (shc)
@param {Number} Change in Temperature (t)
@return {Number} Q = m * c * t
*/

thermal.heat = function (m, shc, t, callback) {
  var ans = (m * shc * t);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Heat
/*
@param {Number} Mass (m)
@param {Number} Specific Heat Capacity (shc)
@param {Number} Temperature One (t1)
@param {Number} Temperature Two (t2)
@return {Number} Q = m * c * (t2 - t1)
*/

thermal.cHeat = function (m, shc, t1, t2, callback) {
  var ans = (m * shc * basic.changein(t1, t2));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Latent Heat of Vaporization or Fusion
/*
@param {Number} Mass (m)
@param {Number} V or F (Vaporization or Fusion) (l)
@return {Number} Q = Mass * Latent Heat of Fusion or Vaporization
*/

thermal.latentHeat = function (m, l, callback) {
  var ans = (m * l);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// The Ideal Gas Equation
/*
@param {Number} Number of moles (n)
@param {Number} The temperature, Kelvin (t)
@return {Number} P * V = n * r * t
*/

thermal.idealGasPV = function (n, t, callback) {
  var ans = (n * (constant.GasConstant) * t);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Thermodynamics Work Equation
/*
@param {Number} Pressure (p)
@param {Number} Volume (v)
@return {Number} W = P * V (Already change in Volume)
*/

thermal.work = function (p, v, callback) {
  var ans = (p * v);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Thermodynamics Work Equation
/*
@param {Number} Pressure (p)
@param {Number} Initial Volume (v1)
@param {Number} Final Volume (v2)
@return {Number} W = P * (v2 - v1)
*/

thermal.cWork = function (p, v1, v2, callback) {
  var ans = (p * basic.changein(v1, v2));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Heat Relation Equation
/*
@param {Number} Work Done (w)
@param {Number} Internal Energy Change (u)
@return {Number} Q = U + W
*/

thermal.heatChange = function (u, w, callback) {
  var ans = (u + w);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Heat Relation Equation
/*
@param {Number} Work Done (w)
@param {Number} Initial Energy Change (u1)
@param {Number} Final Energy Change (u2)
@return {Number} Q = (Change in) U + W
*/

thermal.cHeatChange = function (u1, u2, w, callback) {
  var ans = (basic.changein(u1, u2) + w);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};
},{"./basic":10,"./constants/constants":11,"./constants/multiplier":12,"./constants/units":13}],19:[function(require,module,exports){
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

var constant = require('./constants/constants');
var units = require('./constants/units');
var multiplier = require('./constants/multiplier');
var basic = require('./basic');
var wave = exports;

// Angular Frequency (w) Function
/*
@param {Number} Time (T)
@var ans = {Number} ω = 2 pi / T
*/

wave.angularFrequency = function (T, callback) {
  var ans = ((2 * Math.Pi) / (T));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Displacement (x) of a particle from an arbitrarily 
// defined equilibrium point at time = t
/*
@param {Number} Amplitude of oscillation (A)
@param {Number} Angular frequency (ω)
@param {Number} Time (t)
@var ans = {Number} x(t) = A * sin(ω*t)
*/

wave.displacement = function (m, w, t, callback) {
  var ans = (A * Math.sin(w * t));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Velocity (v) of a particle from an arbitrarily 
// defined equilibrium point at time = t
/*
@param {Number} Angular frequency (ω)
@param {Number} Amplitude of oscillation (A)
@param {Number} Time (t)
@var ans = {Number} v(t) = ω * A * cos(ω*t)
*/

wave.velocity = function (w, A, t, callback) {
  var ans = (w * A * Math.cos(w * t));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Acceleration (a) of a particle from an arbitrarily 
// defined equilibrium point at time = t
/*
@param {Number} Angular frequency (ω)
@param {Number} Amplitude of oscillation (A)
@param {Number} Time (t)
@var ans = {Number} a(t) = -ω^2 * A * sin(ω*t)
*/

wave.acceleration = function (w, A, t, callback) {
  var ans = ((-1 * w) ^ 2 * A * Math.sin(w * t));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Kinetic energy (K) of a particle undergoing 
// simple harmonic motion
/*
@param {Number} Mass of particle (m)
@param {Number} Angular frequency (ω)
@param {Number} Amplitude of oscillation (A)
@param {Number} Displacement from equilibrium point (x)
@var ans = {Number} K = 0.5 * m * ω^2 * (A^2 - x^2)
*/

wave.kineticEnergy = function (m, w, A, x, callback) {
  var ans = (0.5 * m * w ^ 2 * (A ^ 2 - x ^ 2));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Potential energy (U) of a particle undergoing 
// simple harmonic motion
/*
@param {Number} Mass of particle (m)
@param {Number} Angular frequency (ω)
@param {Number} Displacement from equilibrium point (x)
@var ans = {Number} K = 0.5 * m * ω^2 * x^2
*/

wave.potentialEnergy = function (m, w, x, callback) {
  var ans = (0.5 * m * w ^ 2 * x ^ 2);
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Total energy (E) of a particle undergoing simple harmonic motion
/*
@param {Number} Mass of particle (m)
@param {Number} Angular frequency (ω)
@param {Number} Amplitude of oscillation (A)
@var ans = {Number} E = 0.5 * m * ω^2 * A^2 
*/

wave.netEnergy = function (m, w, A, callback) {
  var ans = (0.5 * m * w ^ 2 * A ^ 2);
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Wave Speed (v) Function
/*
@param {Number} Frequency (f)
@param {Number} Wavelength (λ)
@var ans = {Number} v = f * λ
*/

wave.waveSpeed = function (frequency, wavelength, callback) {
  var ans = (frequency * wavelength);
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Refractive Index of an unknown material
/*
@param {Number} Wave speed in known medium (v1)
@param {Number} Wave speed in unknown medium (v2)
@param {Number} Refractive Index of known medium (n)
@var ans = {Number} n2 = (n1 * v1) / v2
*/

wave.refractiveIndex = function (v1, v2, n1, callback) {
  var ans = ((n1 * v1) / v2);
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Minimum angular resolution (in rads) required to 
// distinguish two bodies or a measure of image quality
/*
*
@param {Number} Wavelength (λ) of incident light
@param {Number} Diameter of aperature (d)
@var ans = {Number} θ = 1.22 * (λ / d)
*/

wave.angularResolution = function (wavelength, d, callback) {
  var ans = (1.22 * (wavelength / d));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Acoustic beat frequency of two waves
/*
@param {Number} Frequency of first wave (f1)
@param {Number} Frequency of second wave (f2)
@var ans = {Number} b = |f2 - f1|
*/

wave.beatFrequency = function (f1, f2, callback) {
  var ans = (Math.abs(f2 - f1));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Wavelength of the nth harmonic
/*
@param {Number} Length of string (L)
@param {Numberr} Nth harmonic (n)
@var ans = {Number} λ = 2L / n
*/

wave.harmonicLen = function (L, n, callback) {
  var ans = ((2 * L) / n);
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Frequency of the nth harmonic
/*
@param {Number} Wave speed (v)
@param {Number} Length of string (L)
@param {Numberr} Nth harmonic (n)
@var ans = {Number} f = v / (2L / n)
*/

wave.harmonicFreq = function (v, L, n, callback) {
  var ans = (v / wave.harmonicLen(L, n));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};
},{"./basic":10,"./constants/constants":11,"./constants/multiplier":12,"./constants/units":13}]},{},[1])
;