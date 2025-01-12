const sumAll = function(firstInteger, lastInteger) {
    let sum = 0, temp = 0;

    if(Number.isInteger(firstInteger) && Number.isInteger(lastInteger) && firstInteger > 0 && lastInteger > 0) {
        if(firstInteger > lastInteger) {
            temp = firstInteger;
            firstInteger = lastInteger;
            lastInteger = temp;
        }

        for(let i = firstInteger ; i <= lastInteger ; i++) {
            sum += i;
        }
    } else {
        return "ERROR";
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
