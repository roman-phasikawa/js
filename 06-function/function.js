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

// Create a function named reverseString that takes a string as input
// and returns the string reversed. For instance, "hello" should become
// "olleh"
const reverseString = (str) => {
  let newString = "";
  for (let i = str.length-1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};
console.log(reverseString("hello"));

// Write a function called createUsername that takes firstName and
// lastName as parameters. If lastName is not provided, it should default
// to "User". Return username as "firstname_lastname" in lowercase.
const createUsername=(firstName,lastName="User")=>{
  return `${firstName}_${lastName}`.toLowerCase();
};
console.log(createUsername("Ram"));

// Create a function called applyOperation that takes two numbers and
// a callback function as parameters. The callback should perform an
// operation on the two numbers
const addNum=(a,b)=>{
  return a+b;
}
const applyOperation = (n1, n2, callback) => {
  return callback(n1,n2);
};
console.log(applyOperation(2, 3,addNum));

// Write a function named filterAdults that takes an array of ages and
// returns a new array containing only ages 18 or above using the
// filter() method
const filterAdults = (arr) => {
  return arr.filter(age=>age>=18);  
};
const arrAge = [12, 18, 16, 21, 30];
console.log(filterAdults(arrAge));

//  Create a function called calculateGrade that takes a score (0-100) 
// and returns a letter grade: A (90-100), B (80-89), C (70-79), D (60-69), F 
// (below 60)
const calculateGrade = (grade)=>{
  if(grade>=90)
    return "A";
  else if(grade<90&&grade>=80)
    return "B";
  else if(grade<80&&grade>=70)
    return "C";
  else if(grade<70&&grade>=60)
    return "D";
  else
    return "F";
}
console.log(calculateGrade("70"));

// Write a function isPalindrome that checks if a string is a palindrome 
// (reads the same forwards and backwards), ignoring spaces and cases
const isPalindrome = (str) => {
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
console.log(isPalindrome("ram")); 
console.log(isPalindrome("mom")); 
