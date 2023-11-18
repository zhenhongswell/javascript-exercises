const removeFromArray = function(currentArray, ...elementsNeedToRemove) {
    const newArray = [];
    currentArray.forEach(element => {
        if (!elementsNeedToRemove.includes(element)){
            newArray.push(element);
        }
    });
    
    return newArray;
};
/*
Loop currentArray
    If 
*/
// Do not edit below this line
module.exports = removeFromArray;
