const fibonacci = function(value) {
    if (value < 0) return "OOPS";
    if (value === 0) return 0;
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
    let firstPrev = 1;
    let secondPrev = 0;
    for (let index = 2; index <= value; index++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }
    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
