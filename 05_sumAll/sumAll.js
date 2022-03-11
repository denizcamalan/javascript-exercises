const sumAll = function(first,last) {
    let result = 0;
    let text = "";
        if ((first && last) < 0 ) {
            text ="ERROR";
            return text;
        }else if((typeof first && typeof last) != ("number")){
            text ="ERROR";
            return text;
        }else{
            for (i=first; i<=last; i++){
                result = result + i;
            }
            return result;
        }
};

// Do not edit below this line
module.exports = sumAll;
