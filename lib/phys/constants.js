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

constants.GasConstant = 8.31;
constants.GasConstantUnit = "J/K^-1mol^-1";
	
constants.BoltzmannsConstant = 1.38 * Math.pow(10, -23);
constants.BoltzmannsConstantUnit = "JK^-1";
	
constants.StefanBoltzmannConstant = 5.67 * Math.pow(10, -8);
constants.StefanBoltzmannConstantUnit = "Wm^-2K^-4";
	
constants.CoulombConstant = 8.99 * Math.pow(10, 9);
constants.CoulombConstantUnit = "Nm^2C^-2";

constants.PermittivityFreeSpace = 8.85 * Math.pow(10, -12);
constants.PermittivityFreeSpaceUnit = "C^2N^-1m^-2";
	
constants.PermeabilityFreeSpace = 4 * Math.Pi * Math.pow(10, -7);
constants.PermeabilityFreeSpaceUnit = "TmA^-1";
	
constants.SpeedofLightVacuum = 3.00 * Math.pow(10, 8);
constants.SpeedofLightVacuumUnit = "ms^-1";
	
constants.PlancksConstant = 6.63 * Math.pow(10, -34);
constants.PlancksConstantUnit = "Js";
	
constants.ElementaryCharge = 1.60 * Math.pow(10, -19);
constants.ElementaryChargeUnit = "C";
	
constants.ElectronRestMassKG = 9.110 * Math.pow(10, -31);
constants.ElectronRestMassKGUnit = "kg";
	
constants.ElectronRestMassU = 0.000549;
constants.ElectronRestMassUUnit = "u";
	
constants.ElectronRestMasseV = 0.511 * multiplier.M;
constants.ElectronRestMasseVUnit = "eVc^-2";
	
constants.ProtonRestMassKG = 1.673 * Math.pow(10, -27);
constants.ProtonRestMassKGUnit = "kg";
	
constants.ProtonRestMassU = 1.007276;
constants.ProtonRestMassUUnit = "u";

constants.ProtonRestMasseV = 938 * multiplier.M;
constants.ProtonRestMasseVUnit = "eVc^-2";
	
constants.NeutronRestMassKG = 1.675 * Math.pow(10, -27);
constants.NeutronRestMassKGUnit = "kg";
	
constants.NeutronRestMassU = 1.008665;
constants.NeutronRestMassUUnit = "u";
	
constants.NeutronRestMasseV = 940 * multiplier.M;
constants.NeutronRestMasseVUnit = "eVc^-2";
	
constants.UnifiedAtomicMassKG = 1.661 * Math.pow(10, -27);
constants.UnifiedAtomicMassKGUnit = "kg";
	
constants.UnifiedAtomicMasseV = 931.5 * multiplier.M;
constants.UnifiedAtomicMasseVUnit = "eVc^-2";