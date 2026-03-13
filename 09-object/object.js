// 1. Create an object that stores a person’s name, age, and city, then print all the
// properties
const obj1 = {
  fname: "Ram",
  age: 18,
  city: "Bhaktapur",
};
console.log(obj1);

// 2. Access and print the value of a specific property from an object.
const obj2 = {
  name: "Ram",
  gender: "Male",
};
console.log(obj2.gender);

// 3. Add a new property to an existing object and update the value of an existing
// property.
const obj3 = {
  name: "sita",
};
obj3.gender = "female";
console.log(obj3);

// 4. Delete a property from an object and print the updated object.
let obj4 = {
  emp: "ram",
  id: 101,
  salary: 4000,
};
delete obj4.id;

// 5. Loop through all properties of an object and print each key and value.
let obj5 = {
  emp_name: "sita",
  emp_id: 101,
  wages: 500,
};
for (let key in obj5) {
  var value = obj5[key];
  console.log(key + ": " + value);
  //   console.log(`${key}:${obj5[key]}`);
}

// 6. Check whether a given property exists in an object.
const obj6 = {
  brand: "Apple",
  model: "MacBook Pro",
};

console.log("brand" in obj6); // Output: true
console.log("price" in obj6);

// 7. Count the total number of properties in an object.
const obj7 = {
  title: "hya hya",
  author: "singh",
  year: 2020,
};

let count = 0;
for (let key in obj7) {
  if (obj7.hasOwnProperty(key)) {
    count++;
  }
}
console.log(count);

// 8. Convert an object into an array of keys and an array of values.
const obj8 = {
  name: "ram",
  gender: "male",
};
let keys = [];
let values = [];

for (let key in obj8) {
  if (obj8.hasOwnProperty(key)) {
    keys.push(key);
    values.push(obj8[key]);
  }
}
console.log(keys, values);

// 9. Given an object with numeric values, find the property with the highest value.
let obj9 = {
  age: 20,
  id: 101,
};
let maxKey = 0;
let maxValue = 0;
for (let key in obj9) {
  if (obj9.hasOwnProperty(key)) {
    if (obj9[key] > maxValue) {
      maxValue = obj9[key];
      maxKey = key;
    }
  }
}
console.log(`Highest Property: ${maxKey} with a value of ${maxValue}`);

// 10. Merge two objects into a single object without using built-in merging methods.
const obj10 = {
  fname: "ram",
};
const obj11 = {
  lname: "shah",
};
const mergeObj = {};
for (let key in obj10) {
  if (obj10.hasOwnProperty(key)) mergeObj[key] = obj10[key];
}
for (let key in obj11) {
  if (obj11.hasOwnProperty(key)) mergeObj[key] = obj11[key];
}
console.log(mergeObj);
