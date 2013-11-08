phys.js
====

Information
====

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

Uses
====

Phys is a module in node so it's pretty simple to integrate and start using with your current application. With node you're able to install the library as follows:

    npm install phys

Then you're able to input it into your application directly using:

    var phys = require('phys');

Now for example, if you want to use the Mechanics library you're able to just call the functions with the input numbers:

    phys.mechanics.forceMomentum(2, 3, 4, 5);

If you're unsure of what the forceMomentum function does, you're able to use a tool built into the library that will allow you understand the function before using it:

    phys.information.mechanics.forceMomentum();

Calling this will give you access to information of the parameters, and inputs required for the specific function. (This could be used in conjunction with the docs.)

The output would be in this format:

    Name:
    Inputs:
    Equation:

For example:

    The Force Equation - using Momentum
    Inputs are: Initial Momentum, Final Momentum, Initial Time, Final Time.
    Force = (Final Momentum - Initial Momentum) / (Final Time - Initial Time)

You'll know the inputs you've to put in very quickly, as well as what the equations are doing behind the scenes.

This is to allow individuals to build applications that aren't just specific to calculations in Physics, but resources that would let other individuals understand Physics.

Tests
====

Test for the different functions in the Phys Library. To run the tests install:

    "Mocha" - "npm install -g mocha"

Run "mocha" on the main directory.

    Terminal: "mocha" 

It will automatically test the different functions, and display the results on the Terminal.

Core Team
====

* Abhi Agarwal - [@abhiagarwal](http://twitter.com/abhiagarwal)
* Philip Ottesen - [@pjo256](http://github.com/pjo256)