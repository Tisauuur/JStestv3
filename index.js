//display variables

let numOne;
let numTwo;
let operator;

// operation functions 
function add(...nums) {
    return nums.reduce((total, num) => total + num);
};

function subtract(...nums) {
    return nums.reduce((total, num) => total - num);
};

function multiply(...nums) {
    return nums.reduce((total, num) => total * num);
};

function divide(...nums) {
    return nums.reduce((total, num) => total / num);
};

function operate(op, nOne, nTwo) {
    return op(nOne, nTwo);
}

console.log(operate(add, 4, 4));
