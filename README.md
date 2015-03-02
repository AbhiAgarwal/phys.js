[phys.js](http://physjs.com/)
====

[![Build Status](https://travis-ci.org/AbhiAgarwal/phys.js.svg?branch=master)](https://travis-ci.org/AbhiAgarwal/phys.js)

Phys is a library created for individuals who want to use simple or advanced physics functions in their day-to-day work. This library includes functions for:

    - Mechanics
    - Thermal Physics
    - Oscillations and Wave Theory
    - Electric Current and Electromagnetic Induction
    - Fields, Forces and Motions in Fields
    - Energy, power, and climate change
    - Atomic and Nuclear Physics
    - Quantum Physics

The APIs will allow you to understand the usage of each function, while also being able to access each constant and each function defined in the library, and apply them in your work.

###[Uses](http://www.physjs.com/docs/index.html)

Phys is a module in node so it's pretty simple to integrate and start using with your current application. With node you're able to install the library as follows:

    npm install phys

Then you're able to input it into your application directly using:

    var phys = require('phys');

Now for example, if you want to use the Mechanics library you're able to just call the functions with the input numbers:

    phys.mechanics.momentum(2, 3);

If you're unsure of what the momentum() function does, you're able to use a tool built into the library that will allow you understand the function before using it:

    var output = phys.imechanics.momentum();
    console.log(output);

Putting an "i" before any library name without parameters will allow you to see the Name, Inputs, and Equation of that particular function.

The output would be in this format:

    Name:
    Inputs:
    Equation:

For example:

    The Momentum Function
    Inputs are: Mass & Velocity.
    Momentum = Mass * Velocity.

You'll know the inputs you've to put in very quickly, as well as what the operations being performed behind the scenes.

This is to allow individuals to build applications that aren't just specific to calculations in Physics, but resources that would let other individuals understand Physics.

##Using in Browser

Importing this into your HTML file:

    <script src="phys.js"></script>
    <script src="phys.min.js"></script>

Then to get values you can do:

    console.log(phys.basic.changein(2, 3));

###Build

To get the dependencies for our project run:

    npm install

To generate the Javascript file into the /src/ run:

    make build

It will compile and generate the Javascript code in: /src/phys.js & the minified file in /src/phys.min.js.

###Tests

Test for the different functions in the Phys Library. To run the tests install Mocha, and then run:

    make test

It will automatically test the different sections of the library, and display the results on the Terminal.

##Docs

If you want to make the docs then run:

    make docs

##Constants

If you need extra precision in your answers feel free to alter these following files that contain the values for our precision:

- phys/basic.js
- phys/contants/contants.js
- phys/constants/multiplier.js
- phys/constants/units.js

###Core Team

* Abhi Agarwal - [@abhiagarwal](http://twitter.com/abhiagarwal)
* Philip Ottesen - [@pjo256](http://github.com/pjo256)
