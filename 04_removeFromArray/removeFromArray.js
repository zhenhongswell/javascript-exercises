const removeFromArray = function(currentArray, ...elementsNeedToRemove) {
    elementsNeedToRemove.forEach(element => {
        let RemoveIndex = currentArray.indexOf(element);
        if (RemoveIndex > -1){
            currentArray.splice(RemoveIndex,1);
        }
    });
    
    return currentArray;
};
/*
Loop currentArray
    If 
*/
// Do not edit below this line
module.exports = removeFromArray;
