const fibonacci = function(number) {
    let result = 1;
    let result1 = 0;
    let result2 = 0;
        for (let i=1; i<number; i++){
            result2 = result + result1;
            result1 = result;
            result = result2;
        }
        return result2;
};

// Do not edit below this line
module.exports = fibonacci;
