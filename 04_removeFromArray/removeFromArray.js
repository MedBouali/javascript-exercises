const removeFromArray = function(array, ...valuesToDelete) {
    newArray = [];

    for(let i = 0 ; i < array.length ; i++) {
        if(!valuesToDelete.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
