/**
* information.wave.js
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
* (13 functions)
*/

var iwave = exports;

iwave.angularFrequency = function(){
	return ("Angular Frequency\n" +
			"Inputs are: Time\n" +
			"Angular Frequency = 2 * pi / Time"
	);
};

iwave.displacement = function(){
	return ("Displacement(x) of a particle from an arbitrarily defined equilibrium point at time = t\n" +
			"Inputs are: Amplitude of oscillation, Angular frequency, Time\n" +
			"Displacement(Time) = Amplitude of oscillation * sin(Angular frequency * Time)"
	);
};

iwave.velocity = function(){
	return ("Velocity(v) of a particle from an arbitrarily defined equilibrium point at time = t\n" +
			"Inputs are: Angular frequency, Amplitude of oscillation, Time\n" +
			"Velocity(Time) = Angular frequency * Amplitude of oscillation * cos(Angular frequency * Time)"
	);
};

iwave.acceleration = function(){
	return ("Acceleration (a) of a particle from an arbitrarily defined equilibrium point at time = t\n" +
			"Inputs are: Angular frequency, Amplitude of oscillation, Time\n" +
			"Acceleration(Time) = -Angular frequency^2 * Amplitude of oscillation * sin(Angular frequency * Time)"
	);
};

iwave.kineticEnergy = function(){
	return ("Kinetic energy (K) of a particle undergoing simple harmonic motion\n" +
			"Inputs are: Mass of particle, Angular frequency, Amplitude of oscillation, Displacement from equilibrium point\n" +
			"Kinetic energy = 0.5 * Mass of particle * Angular frequency^2 * (Amplitude^2 - Displacement^2)"
	);
};

iwave.potentialEnergy = function(){
	return ("Potential energy of a particle undergoing simple harmonic motion\n" +
			"Inputs are: Mass of particle, Angular frequency, Displacement from equilibrium point\n" +
			"Potential energy = 0.5 * Mass of particle * Angular frequency^2 * Displacement^2"
	);
};

iwave.netEnergy = function(){
	return ("Total energy (E) of a particle undergoing simple harmonic motion\n" +
			"Inputs are: Mass of particle, Angular frequency,  Amplitude of oscillation\n" +
			"Total energy = 0.5 * Mass of particle * Angular frequency^2 * Amplitude^2"
	);
};

iwave.waveSpeed = function(){
	return ("information.wave Speed\n" +
			"Inputs are: Frequency, information.wavelength\n" +
			"information.wave Speed = Frequency * information.wavelength"
	);
};

iwave.refractiveIndex = function(){
	return ("Refractive Index of an unknown material\n" +
			"Inputs are: information.wave speed in known medium, information.wave speed in unknown medium, Refractive Index of known medium\n" +
			"Refractive Index = (Refractive Index of Known * information.wave speed of Known) / information.wave speed of Unknown"
	);
};

iwave.angularResolution = function(){
	return ("Minimum angular resolution (in rads) required to distinguish two bodies or a measure of image quality\n" +
			"Inputs are: information.wavelength of incident light, Diameter of aperature\n" +
			"Minimum angular resolution = 1.22 * (information.wavelength / Diameter)"
	);
};

iwave.beatFrequency = function(){
	return ("Acoustic beat frequency of two information.waves\n" +
			"Inputs are: Frequency of first information.wave, Frequency of second information.wave\n" +
			"Acoustic beat frequency = |Frequency of second information.wave - Frequency of first information.wave|"
	);
};

iwave.harmonicLen = function(){
	return ("information.wavelength of the nth harmonic\n" +
			"Inputs are: Length of string, nth harmonic\n" +
			"information.wavelength = 2 * Length / nth harmonic"
	);
};

iwave.harmonicFreq = function(){
	return ("Frequency of the nth harmonic\n" +
			"Inputs are: information.wave speed, Length of string, Nth harmonic\n" +
			"Frequency = information.wave speed / (2 * Length / Nth harmonic)"
	);
};