/**
* information.quantum.js
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
* (9 functions)
*/

var iquantum = exports;

iquantum.energy = function(){
	return ("Energy\n" +
			"Inputs: Mass.\n" +
			"E = Mass * Speed of Light^2" 
	);
};

iquantum.energyLight = function(){
	return ("Energy of a quanta of light\n" +
			"Inputs: Frequency.\n" +
			"E = Plancks Constant * Frequency" 
	);
};

iquantum.momentum = function(){
	return ("Momentum of quanta\n" +
			"Inputs: Wavelength.\n" +
			"Momentum = Plancks Constant / Wavelength" 
	);
};

iquantum.deBroglie = function(){
	return ("De Broglie wavelength\n" +
			"Inputs: Momentum\n" +
			"Wave Length = Plancks Constant / Momentum" 
	);
};

iquantum.uncPosition = function(){
	return ("Lower-bound to uncertainty in position\n" +
			"Inputs: Uncertainty in Momentum\n" +
			"Lower-bound of Position >= (Plancks Constant / 4 * pi) * (1 / Momentum)" 
	);
};

iquantum.uncMomentum = function(){
	return ("Lower-bound to uncertainty in momentum\n" +
			"Inputs: Uncertainty in Position\n" +
			"Lower-bound of Momentum >= (Plancks Constant / 4 * pi) * (1 / Position)" 
	);
};

iquantum.maxKineticEnergy = function(){
	return ("Maximum kinetic energy of emitted electrons incident with a frequency f upon a metal with a work function W\n" +
			"Inputs: Work function (Joules), Frequency\n" +
			"Kinetic Energy = Plancks Constant * Frequency - Work function"
	);
};

iquantum.minWork = function(){
	return ("Minimum energy required to delocalize an electron from the surface of a metal\n" +
			"Inputs: Threshold frequency\n" +
			"Work = Plancks Constant * Threshold frequency"
	);
};

iquantum.thresholdFreq = function(){
	return ("Minimum frequency required to induce photoelectric effect\n" +
			"Inputs: Work\n" +
			"Minimum frequency = Work / Plancks Constant"
	);
};

iquantum.energyLevels = function(){
	return ("Electron In a Box Experiment: Energy Levels\n" +
			"Inputs: Mass, Width of the well, State with information.quantum number\n" +
			"Energy Levels = (State with information.quantum number^2 * Plancks Constant^2) / (8 * Mass * Width of the well^2)"
	);
};

iquantum.decay = function(){
	return ("Rates of Radioactive Decay\n" +
			"Inputs: Number of atoms, Decays per unit time, Time\n" +
			"Number of atoms decayed = Number of atoms * e ^ (- Decays per unit time is a constant fraction * Time)"
	);
};

iquantum.halflife = function(){
	return ("Half Life\n" +
			"Inputs: Decay Constant\n" +
			"Half Life = ln(2) / (Decay Constant)"
	);
};

iquantum.activity = function(){
	return ("Activity, in number of counts per second\n" +
			"Inputs: Number of atoms Decayed, Decay Constant\n" +
			"Activity = lambda * Number of Atoms Decayed"
	);
};

iquantum.activityE = function(){
	return ("Activity, in number of counts per second\n" +
			"Inputs: Number of atoms Decayed, Decay Constant, Time\n" +
			"A = Decay Constant * (Number of atoms * e ^ (- Decays per unit time is a constant fraction * Time))"
	);
};