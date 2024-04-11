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

console.log(subtract(4, 2));
