// setTimeout()
// ● Create a function that prints a message after 3 seconds
// ● Use setTimeout() to delay the execution
// ● Print a message before and after calling setTimeout() to show async
// behavior
function delayedMessage() {
    console.log("3 seconds have passed: The delayed message is here!");
}
// Schedule the function to run after 3000 milliseconds (3 seconds)
setTimeout(delayedMessage, 3000);

console.log("Async behavior");



//  Passing Arguments to setTimeout
// ● Use setTimeout() to pass arguments to a function
// ● Display the passed values in the console

let name = "Ram";
function nUser(name) {
  setTimeout(() => {
    console.log(`${name}`);
  }, 2000);
}
console.log("Starting the timer...");
nUser(name);
console.log("The timer is running in the background.");



// Canceling setTimeout
// ● Create a timeout and store its ID
// ● Cancel the timeout using clearTimeout()
// 1. Create the timeout and store its unique ID in a variable
// 1. Start a timer and save its "ID" in a variable called 'timer'

let timer = setTimeout(() => {
  console.log("BOOM!"); // This should not happen
}, 5000);
console.log("Timer started for 5 seconds...");
// 2. Immediately cancel the timer using its ID
clearTimeout(timer);
console.log("Wait! I changed my mind");



//  setInterval()
// ● Create a counter that increments every 1 second
// ● Print the counter value in the console

let count = 0;
const counterInterval = setInterval(() => {
  count++;
  console.log(`Counter: ${count}`)
  //  Stopping setInterval
  // ● Stop the interval after 5 executions
  // ● Use clearInterval() to stop it
  if (count === 5) //Stop the counter once it reaches 5 
  {
    clearInterval(counterInterval);
    console.log("Counter reached 5. Stopping now!");
  }
}, 1000);
console.log("The counter has started...");
