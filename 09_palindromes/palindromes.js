const palindromes = function (string) {
    let reversed = [];
    string = string.split("");
        for (let i=0; i<string.lenth-1; i++){
            reversed[i] = string[(string.lenth-1)-i];
        }
            reversed = reversed.toString;
            string = string.toString;
    if (reversed == string) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
