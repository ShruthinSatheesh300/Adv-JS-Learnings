// JavaScript Classes are templates for JavaScript Objects.

// Use the keyword class to create a class.

// Always add a method named constructor():

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
//   The example above creates a class named "Car".
  
//   The class has two initial properties: "name" and "year".
  
//   A JavaScript class is not an object.

//.......................................................

// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.

// How to Create a Set
// You can create a JavaScript Set by:

// Passing an Array to new Set()
// Create a new Set and use add() to add values
// Create a new Set and use add() to add variables

// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");