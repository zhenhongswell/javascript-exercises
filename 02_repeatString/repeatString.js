const repeatString = function(string,repeatCount) {
    if (repeatCount === (-1)){
        return "ERROR";
    }
    let repeat_String="";
    for (let index = 0; index < repeatCount; index++) {
        repeat_String += string;
    }
    
    return repeat_String;
};

// Do not edit below this line
module.exports = repeatString;
