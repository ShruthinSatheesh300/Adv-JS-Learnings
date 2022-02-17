//Java Script Hoisting:-
//Hoisting is a property that say a function and a variable can be accessed even before we
//have initialized it

//JavaScript Declarations are Hoisted
//In JavaScript, a variable can be declared after it has been used.
//In other words; a variable can be used before it has been declared.

//Variables defined with "let" and "const" are hoisted to the top of the block, 
//but not initialized.

//Meaning: The block of code is aware of the variable, but it cannot be used
// until it has been declared.
//JavaScript only hoists declarations, not initializations.

//For eg:-

var x=7;   //Assigning x=7
 
function display() {
    console.log("Java Script");

}
display();
console.log(x);