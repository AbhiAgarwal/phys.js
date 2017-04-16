Contributing
===

Contributing to Phys.JS is simple and easy. Just be sure to use the guidelines, and utilize the tools we used to create this library.

## Guidelines

When contributing please make sure you're using our guidelines:

- Semicolons
- Use already existing functions in basic.js (or add to them)
- Writing Documentation
- Writing to our Information section
- Writing Tests

Please read some of our code before hand to get a feel for the syntax we use.

## Physics

You don't have to be extremely qualified in Physics to contribute to our library, nor even a Ph.D or Masters student in Physics (we aren't either!). But you just have to be passionate about Physics and have a general understanding of the formulas you're contributing to this library.
<br><br>
If your ideas don't fit under these categories, then let us know!

    - Mechanics
    - Thermal Physics
    - Oscillations and Wave Theory
    - Electric Current and Electromagnetic Induction
    - Fields, Forces and Motions in Fields
    - Energy, power, and climate change
    - Atomic and Nuclear Physics
    - Quantum Physics

## Development

Here are a few commands that will help you get started development for our Library:

`make test`
`make build`
`make docs`

Using Node.JS you can use the Library and check your development pretty easily:

`node index.js`
`node lib/phys.js`

### Tools

Here are some tools we use while development Phys.JS:

- Node.JS
- JSLint
- Mocha
- Browserify
- Uglifyjs

## Generating for the Browser

Add this to `index.js` if you want to generate the docs for the browser:

    window.phys = require('./lib/phys.js');
