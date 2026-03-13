// Study about “this” keyword in arrow functions and normal function, show a 
// code doing it.
const person = {
  name: "Alex",
  
  // 1. Normal Function
  sayNameNormal: function() {
    console.log("Normal Function:", this.name);
  },

  // 2. Arrow Function
  sayNameArrow: () => {
    // 'this' here refers to the global scope (window), not 'person'
    console.log("Arrow Function:", this.name);
  },

};

person.sayNameNormal();   // Output: "Alex" (Works as expected)
person.sayNameArrow();    // Output: undefined (Arrow function looks outside 'person')