// 1. Create an array of numbers and print all the elements using a loop.
let arr1=[1,3,5,6,7];
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}

// 2. Given an array of numbers, find the sum of all elements.
let arr2=[2,4,6,8,10];
let sum=0;
for(let i=0;i<arr2.length;i++){
    sum +=arr2[i];
}
console.log(sum);

// 3. Find the largest number in a given array.
let arr3 = [7, 9, 3, 5, 11, 1];
let max = 0;
for (let i = 0; i < arr3.length; i++) {
  if (max < arr3[i]) max = arr3[i];
}
console.log(max);

// 4. Count how many even numbers and odd numbers are present in an array.
let arr4=[4,3,7,1,8,2];
let even=0, odd=0;
for(let i=0;i<arr4.length;i++){
    if(arr4[i]%2==0)
        even++;
    else
        odd++;
}
console.log(even+" even");
console.log(odd+" odd");

// 5. Reverse an array without using the built-in reverse() method.
let arr5 = [1, 2, 3, 4, 5];
let revArr = [];
let count1 = 0;
for (let i = arr5.length-1; i >= 0; i--) {
  revArr[count1]= arr5[i];
  count1++;
}
console.log(revArr);

// 6. Check whether a given element exists in an array. If it exists, print its index;
// otherwise, print "Element not found".
let arr6 = [1, 3, 5, 7, 9];
let key = 9;
let count2 = 0;
for (let i = 0; i < arr6.length; i++) {
  if (key == 9) {
    console.log("Found at arr6" + "[" + count2 + "]");
    break;
  } else {
    console.log("Element not found");
    break;
  }
  count2++;
}

// 7. Remove duplicate elements from an array and store the unique values in a
// new array
let arr7 = [2, 4, 2, 1, 3, 4];
let uniqueArr=[];
let uniqueIndexArr=0;
for (let i = 0; i < arr7.length; i++) {
  let duplicate=false;
  for (let j = 0; j < uniqueIndexArr; j++) {
    if (arr7[i] == uniqueArr[j]) {
      duplicate = true;
      console.log("Duplicate found");
    }
  }
  if (!duplicate) {
    uniqueArr[uniqueIndexArr]=arr7[i];
    uniqueIndexArr++;
  }
}
console.log(uniqueArr);

// 8. Find the second largest number in an array without sorting it.
let arr8 = [3, 6, 5, 9, 2, 7];
let max1 = 0;
let maxTwo = 0;
for (let i = 0; i < arr8.length; i++) {
  if (max < arr8[i]) {
    maxTwo=max1;
    max1 = arr8[i];
  }
  else(maxTwo>arr8[i])
    maxTwo=arr8[i];

}
console.log(maxTwo);

// 9. Rotate an array to the right by one position.
// Example: [1, 2, 3, 4] → [4, 1, 2, 3]
let arr = [1, 2, 3, 4];
let lastElement = arr[arr.length - 1];
for (let i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
}
arr[0] = lastElement;
console.log(arr);

// 11. Merge two arrays into one and sort the merged array in ascending order
// without using the sort() method.
function mergeAndSort(arr1, arr2) {
  let merged = [...arr1, ...arr2];
  let n = merged.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (merged[j] > merged[j + 1]) {
        let temp = merged[j];
        merged[j] = merged[j + 1];
        merged[j + 1] = temp;
      }
    }
  }
  return merged;
}
const array1 = [3, 1, 4];
const array2 = [6, 2, 5];
console.log(mergeAndSort(array1, array2));
