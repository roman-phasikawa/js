// Write a function called greetUser that takes a name as a parameter
// and returns a greeting message like "Hello, [name]! Welcome to
// JavaScript.
let name;
greetUser("Roman");

function greetUser(name) {
  console.log("Hello, " + name + "! Welcome to Javascript");
}

// Create a function named calculateArea that takes the length and
// width of a rectangle as parameters and returns its area. Test it with
// length = 5 and width = 8.
let length, width;
calculateArea(5, 8);
function calculateArea(length, width) {
  console.log("Area: " + length * width);
}

// Write a function called isEven that takes a number as input and returns
// true if the number is even, and false if it's odd.

function isEven(number) {
  return number % 2 === 0;
}
let number = 11;
console.log(isEven(number));

//  Create a function celsiusToFahrenheit that converts a temperature
// from Celsius to Fahrenheit using the formula: F = (C × 9/5) + 32.
function celsiusToFahrenheit(C){
    F=(C*9/5)+32;
    return F;
}
let C=37;
let F;
console.log(celsiusToFahrenheit(C));

// Write a function called findMax that takes an array of numbers as a
// parameter and returns the largest number in the array. For example,
// findMax([3, 7, 2, 9, 1]) should return 9.
numMax=[3,7,21,9,11]
function findMax(numbers) {
  if (numbers.length === 0) return null; // Handle empty arrays

  let max = numbers[0]; // Start by assuming the first number is the biggest

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]; // Update max if a larger number is found
    }
  }

  return max;
}
console.log(findMax(numMax));
