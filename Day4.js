//DAY-4
/*
Completed 1 project from CODECADEMY 
   Course name - "LEARN JAVASCRIPT: FUNDAMENTALS"
*/

//a constant variable storing named kelvin
const kelvin = 293;

//subtracting from kelvin as celsius is 273 degree less than kelvin
let celsius = kelvin - 273;

// Calculate Fahrenheit from Celsius and round down using Math.floor
function convertToFahrenheit(celsius) {
    return Math.floor(celsius * (9/5) + 32);
  }
  let fahrenheit = convertToFahrenheit(celsius);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// Convert Celsius to Newton and round down using Math.floor
let newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${newton} degrees Newton.`)
