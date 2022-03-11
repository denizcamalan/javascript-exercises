const repeatString = function(string, number) {
    let result = "";
    for (let i=1; i<=number; i++){
        result = result + string; 
    }
        return result;
};

// Do not edit below this line
module.exports = repeatString;
