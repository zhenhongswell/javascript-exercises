const fibonacci = function(value) {
    // if (typeof(value) === 'string'){
    //     value = parseInt(value);
    // }
    // if (value < 0){
    //     return "OOPS";
    // }
    // if (value === 0){
    //     return 0;
    // }
    // if (value === 1){
    //     return 1;
    // }
    // return fibonacci(value - 1) + fibonacci(value - 2);
    const firstPrev = 1;
    const secondPrev = 0;
    for (let index = 2; index <= value; index++) {
        const current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }
};

// Do not edit below this line
module.exports = fibonacci;
