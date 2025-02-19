/*
A return statement determines the value returned by a function
It stops function execution
*/



function add(num1, num2){
    console.log(num1 + num2);
}

add(2, 3); // 5

console.clear();

//what if I want to keep hold of the value generetaed by the function?
function addVal(val1, val2){
    return val1 + val2;
}

const result = addVal(3, 3); 
console.log(result); // 6

function test(){
    return "Hello";
}

// I see a return statement amd I immedately crate a new variable to hold its value
const returnValue = test();

// Imagine a shopping cart

function calcTotal ( price1, price2 ){
    return price1 + price2;
}

const totalPrice = calcTotal( 10, 20);

// Imagine you have another function responsible for adding the currency symbol

function addSymbol ( val, symb ){
    console.log(`${val}${symb}`);
}
addSymbol(totalPrice, "€");