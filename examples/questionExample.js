/*
The block of copper is first placed in a 
container of boiling water. The block is 
then transferred to an insulated calorimeter 
containing water. The following data are available:

Temperature of boiling water 100°C 
Initial temperature of water in calorimeter 22°C 
Final temperature of water in calorimeter 28°C
Heat capacity of calorimeter and water 950 JK–1

Using our Library and this question, we can solve many
problems very easily.
Using: http://www.physjs.org/docs/thermal.html
*/

var phys = require('../index.js');

// Determine the total thermal energy 
// absorbed by the calorimeter and the water

// Mass: 1, Specific Heat Capacity: 950, 
// Temperature 1: 22, Temperature 2: 28

console.log(phys.thermal.heat(1, 950, 22, 28));