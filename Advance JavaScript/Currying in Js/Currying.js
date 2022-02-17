// Currying transforms the function of multiple arguments into
// several functions of a single argument in sequence.

//For eg:-
//function simpleFunction(para1, para2,para3)
// => function curriedFunction(para1)(para2)(para3)

function calculateVolume(length, breadth, height) {
    return length * breadth * height;
}
console.log(calculateVolume(4, 5, 6));