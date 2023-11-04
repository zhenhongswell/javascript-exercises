const sumAll = function(value1,value2) {
    let sum = 0;
    let max = 0;
    let min = 0;
    if (typeof(value1)!="number" || typeof(value2)!="number"){
        return 'ERROR';
    }
    if (value1 >= value2){
        max = value1;
        min = value2;
    }
    else{
        max = value2
        min = value1;
    }
    sum = min;
    while(min!=max){
        sum+=max;
        max--;
    }
    if (sum < 0 ) return 'ERROR';
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
