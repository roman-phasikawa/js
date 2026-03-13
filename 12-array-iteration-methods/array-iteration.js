// Tasks Using map()
// 1. Create an array of numbers
// 2. Use map() to:
// ○ Double each number
// ○ Convert numbers to strings
// 3. Print both original and new arrays
// 1. Create an array of numbers
const originalNum = [5, 12, 27, 40, 55];
const doubledNum = originalNum.map((num) => num * 2);
const stringNum = originalNum.map((num) => String(num));
console.log("Original Array:", originalNum);
console.log("Doubled Array:", doubledNum);
console.log("String Array:", stringNum);

// Tasks Using filter()
// 1. Create an array of numbers
// 2. Use filter() to:
// ○ Extract even numbers
// ○ Extract numbers greater than a given value
// 3. Print the filtered results
const nums = [7, 12, 25, 30, 41, 58, 62, 89];
const evenNums = nums.filter((num) => num % 2 === 0);
const threshold = 50;
const largeNums = nums.filter((num) => num > threshold);
console.log("Original Array:", nums);
console.log("Even Numbers:", evenNums);
console.log(`Numbers Greater Than ${threshold}:`, largeNums);

// Tasks Using reduce()
// 1. Create an array of numbers
// 2. Use reduce() to:
// ○ Calculate the sum of all elements
// ○ Find the maximum value
// 3. Print the results
const numbers = [15, 42, 7, 88, 33, 61];
const totalSum = numbers.reduce((sum, current) => {
  return sum + current;
}, 0);
const maxVal = numbers.reduce((max, current) => {
  return current > max ? current : max;
}, numbers[0]);
console.log("Array:", numbers);
console.log("Sum of elements:", totalSum);
console.log("Maximum value:", maxVal);

// Combining map, filter, and reduce
// ● Create an array of numbers
// ● Use:
// ○ filter() to get even numbers
// ○ map() to square them
// ○ reduce() to calculate their total sum
// ● Print the final result
const numArr = [3, 4, 5, 6, 7];
const evenArr = numArr.filter((num) => num % 2 == 0);
const squareArr = numArr.map((num) => num * num);
const sumArr = numArr.reduce((sum, point) => {
  return sum + point;
}, 0);
console.log("Numbers: ", numArr);
console.log("Even Numbers: ", evenArr);
console.log("Square of Array: ", squareArr);
console.log("Sum of Array: ", sumArr);

// Create a small program that:
// ○ Uses setTimeout
// ○ Uses a callback
// ○ Uses at least one array method (map, filter, or reduce)
const filterSp = (num) => {
  console.log("Even Numbers: ", num);
};
const filterMain = (num, callback) => {
  setTimeout(() => {
    const filterNum = num.filter((num) => num % 2 == 0);
    callback(filterNum);
  }, 1000);
};
const numSp = [3, 4, 5, 6, 7];
filterMain(numSp, filterSp);
