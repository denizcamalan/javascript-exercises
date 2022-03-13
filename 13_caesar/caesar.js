const caesar = function(string, number) {
    let alphabet = "abcdefghijklmnoprstuvwxyz";
    string = string.split("");
    string[0] = string[0].toLowerCase();
    newString = [];
    let i =0;
      while (i < string.length ){
          for (let j=0; j<alphabet.length; j++){
            if (string[i] === alphabet.charAt(j)) {
              newString[i] = alphabet.charAt(j+number);
              if ((j+number) >= alphabet.length){
                newString[0] = alphabet.charAt(j+number).toUpperCase();
                newString[i] = alphabet.charAt(j+number-(alphabet.length));
              }
            }else if (newString[i].toLowerCase() === alphabet.charAt(j)) {
              newString[i] = newString[i].toUpperCase();
            }
          }
          i++;
      }
      newString = newString.join("");
   return newString;
};

// Do not edit below this line
module.exports = caesar;
