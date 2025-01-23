const fibonacci = function(input) {
    index = parseInt(input);
    
    if(index >= 0){
        let array = [0, 1];
        for(let i = 2 ; i <= index ; i++) {
            array[i] = array[i - 1] + array[i - 2];
        }

        return array[index];
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
