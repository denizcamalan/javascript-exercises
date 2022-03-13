const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
      return oldestAge < currentAge ? currentPerson : oldest
    })
  };
  
  const getAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;

    //getFullYear() ====> method gives year.

    /* let oldest = [];
    const births = array.map(({yearOfBirth}) => yearOfBirth); 
    const deaths = array.map(({yearOfDeath}) => yearOfDeath);
    const len = (births.length);
      for (let i=0; i<len; i++){
            oldest[i] = deaths[i]-births[i];
        }
      let maxIndex = oldest.indexOf(Math.max.apply(Math, oldest));
      let oldestPeople = array.map(({name}) => name);
      oldestPeople = [oldestPeople[maxIndex]];
        return oldestPeople; */
  };

// Do not edit below this line
module.exports = findTheOldest;
