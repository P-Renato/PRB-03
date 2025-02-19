/*
Funsctions allow code to be called ay any time without repetition.
Functions are like "actions".. Their name very often starts with a verb.

"get.. " - return a value
"calc.. " - return a calculated value
"creat.. " - creates something

*/

// Built-in function.. comes out of the box
// console.log("Hey there");

// basic custom function
function printHello() {
    console.log("Hello");
}

// Trigger the function
printHello();




// Function with a parameters
// function print( msg){  // msg can be called anything
//     console.log(msg);
// }

// print("ciao");
// print("Oi");
// print("Hola");

console.clear();



// function print( msg, msg2){  
//     console.log(msg + " " + msg2);
//     console.log(msg2);
// }

// print("Thank you very much", "for your classes!");

/**
 * @param {number} num1 
 * @param {number} num2 
 */

function add(num1, num2){
    console.log(num1, num2);
    console.log(num1 + num2);
}

add(2, 3); // 5
// if we pass less parameters, the function will return NaN
add( 2 ); // NaN
add(2, 3, 4); // 5 the 4 will be ignored coos the function only expects 2 arguments (values)