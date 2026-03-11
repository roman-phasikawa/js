// Prime or not
let n = 33;
let isPrime = true; 

for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        isPrime = false; // Found a divisor, so it's NOT prime
        break;
    }
}
if (n > 1 && isPrime) 
    console.log("Prime");
else 
    console.log("Not Prime");


// Reverse Number
let num="76543";
let digit=0, rev=0;
loop=num.length
num=Number(num)
for(let i=1;i<=loop;i++){
    digit=num%10
    rev=rev*10+digit
    num=Math.floor(num / 10);
}
console.log(rev);

// Count Number 
let num1="98312456"
let count=0
for(let i=0;i<num1.length;i++){
    count++;
}
console.log(count);

// Fibonacci series
let num2 = 10;
let fib = []; 
let result="";

for (let i = 0; i < num2; i++) {
    if (i == 0 || i == 1) {
        fib[i] = i; // 2. Store the 0 and 1 in the array
        console.log(i);
    } else {
        fib[i] = fib[i - 1] + fib[i - 2]; 
    }
    result+=fib[i]+" ";

}
console.log(result);

//Pattern
/*
*****
*****
*****
*****
***** 
*/


for (let i = 0; i < 5; i++) {
    let rowContent = "";
    for (let j = 0; j <5; j++) {
        rowContent += "*";
    }
    console.log(rowContent);
}

/*
*
**
***
****
***** 
*/
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let row1Content = "";
    // The inner loop runs 'i' times for each row
    for (let j = 0; j < i; j++) {
        row1Content += "*";
    }
    console.log(row1Content);
}