function add(...nums) {
    return nums.reduce((total, num) => total + num, 0);
};

function subtract(...nums) {
    return nums.reduce((total, num) => total - num, 0);
};

function multiply(...nums) {
    return nums.reduce((total, num) => total * num);
};

function divide(...nums) {
    return nums.reduce((total, num) => total / num);
};


