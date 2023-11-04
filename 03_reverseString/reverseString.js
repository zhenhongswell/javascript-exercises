const reverseString = function(originalString) {
    let reversedString = "";
    for (let index = originalString.length - 1; index >= 0; index--) {
        reversedString += originalString[index];
    }
    return reversedString;
};
// reverseString('hello')).toEqual('olleh'

// Do not edit below this line
module.exports = reverseString;