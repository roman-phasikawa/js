//  Basic Callback Function
// ● Create a function that accepts another function as a parameter
// ● Call the callback function inside it

function myCallback() {
  console.log("Executed");
}
function mainFunction(callback) {
  console.log("Starting the main task..");
  // Now we "call" the function that was passed to us
  callback();
}
mainFunction(myCallback);

// Callback with Data
// ● Create a function that takes a number and a callback
// ● Perform a calculation and pass the result to the callback
function Res(total) {
  console.log("The result is: " + total);
}

function Calcu(num, callback) {
  // Perform the calculation
  let result = num * 2;
  callback(result);
}
Calcu(5, Res);


// Multiple Callbacks 
// ● Create a function that accepts success and error callbacks 
// ● Call the appropriate callback based on a condition 

function Success(message) {
  console.log("Success: " + message);
}

function Error(message) {
  console.log("Error: " + message);
}

function MainSE(score, success, error) {
  if (score >= 50) {
    // If score is 50 or more, call the success function
    success("You passed the class");
  } else {
    // If score is less than 50, call the error function
    error("You did not pass");
  }
}
MainSE(85,Success,Error); // This will trigger Success
MainSE (30,Success,Error); // This will trigger Error




//  Callback with Asynchronous Code 
// ● Use setTimeout() inside a function 
// ● Call a callback after the async task completes

function finish() {
  console.log("Done!");
}

function startAsync(callback) {
  console.log("Takes 2 seconds");
  setTimeout(callback, 2000); 
}
startAsync(finish);

//  Real-Life Example 
// ● Simulate fetching data using a callback function 
// ● Print the received data in the callback

function fetchData(callback) {
  console.log("Fetching data...");
  
  setTimeout(() => {
    const data = "Success! Data received.";
    callback(data); // Send data to the callback
  }, 1500);
}

// Pass a simple function to print the result
fetchData((result) => {
  console.log(result);
});