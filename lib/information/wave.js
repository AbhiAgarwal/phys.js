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
* (13 functions)
*/

wave = exports;

wave.angularFrequency = function(){
	return ("Angular Frequency\n" +
			"Inputs are: Time\n" +
			"Angular Frequency = 2 * pi / Time"
	);
};

wave.displacement = function(){
	return ("Displacement(x) of a particle from an arbitrarily defined equilibrium point at time = t\n" +
			"Inputs are: Amplitude of oscillation, Angular frequency, Time\n" +
			"Displacement(Time) = Amplitude of oscillation * sin(Angular frequency * Time)"
	);
};

wave.velocity = function(){
	return ("Velocity(v) of a particle from an arbitrarily defined equilibrium point at time = t\n" +
			"Inputs are: Angular frequency, Amplitude of oscillation, Time\n" +
			"Velocity(Time) = Angular frequency * Amplitude of oscillation * cos(Angular frequency * Time)"
	);
};

wave.acceleration = function(){
	return ("Acceleration (a) of a particle from an arbitrarily defined equilibrium point at time = t\n" +
			"Inputs are: Angular frequency, Amplitude of oscillation, Time\n" +
			"Acceleration(Time) = -Angular frequency^2 * Amplitude of oscillation * sin(Angular frequency * Time)"
	);
};

wave.kineticEnergy = function(){
	return ("Kinetic energy (K) of a particle undergoing simple harmonic motion\n" +
			"Inputs are: Mass of particle, Angular frequency, Amplitude of oscillation, Displacement from equilibrium point\n" +
			"Kinetic energy = 0.5 * Mass of particle * Angular frequency^2 * (Amplitude^2 - Displacement^2)"
	);
};

wave.potentialEnergy = function(){
	return ("Potential energy of a particle undergoing simple harmonic motion\n" +
			"Inputs are: Mass of particle, Angular frequency, Displacement from equilibrium point\n" +
			"Potential energy = 0.5 * Mass of particle * Angular frequency^2 * Displacement^2"
	);
};

wave.netEnergy = function(){
	return ("Total energy (E) of a particle undergoing simple harmonic motion\n" +
			"Inputs are: Mass of particle, Angular frequency,  Amplitude of oscillation\n" +
			"Total energy = 0.5 * Mass of particle * Angular frequency^2 * Amplitude^2"
	);
};

wave.waveSpeed = function(){
	return ("Wave Speed\n" +
			"Inputs are: Frequency, Wavelength\n" +
			"Wave Speed = Frequency * Wavelength"
	);
};

wave.refractiveIndex = function(){
	return ("Refractive Index of an unknown material\n" +
			"Inputs are: Wave speed in known medium, Wave speed in unknown medium, Refractive Index of known medium\n" +
			"Refractive Index = (Refractive Index of Known * Wave speed of Known) / Wave speed of Unknown"
	);
};

wave.angularResolution = function(){
	return ("Minimum angular resolution (in rads) required to distinguish two bodies or a measure of image quality\n" +
			"Inputs are: Wavelength of incident light, Diameter of aperature\n" +
			"Minimum angular resolution = 1.22 * (Wavelength / Diameter)"
	);
};

wave.beatFrequency = function(){
	return ("Acoustic beat frequency of two waves\n" +
			"Inputs are: Frequency of first wave, Frequency of second wave\n" +
			"Acoustic beat frequency = |Frequency of second wave - Frequency of first wave|"
	);
};

wave.harmonicLen = function(){
	return ("Wavelength of the nth harmonic\n" +
			"Inputs are: Length of string, nth harmonic\n" +
			"Wavelength = 2 * Length / nth harmonic"
	);
};

wave.harmonicFreq = function(){
	return ("Frequency of the nth harmonic\n" +
			"Inputs are: Wave speed, Length of string, Nth harmonic\n" +
			"Frequency = Wave speed / (2 * Length / Nth harmonic)"
	);
};