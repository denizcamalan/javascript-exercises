const reverseString = function(string) {
    let result = [];
    string = string.split("");
    const len = string.length-1;
    for (i=0; i<=(len); i++){
        result[i]= string[len-i];
    }
        return result.join("");
};

// Do not edit below this line
module.exports = reverseString;
