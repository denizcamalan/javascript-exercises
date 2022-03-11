const findTheOldest = function(people) {
    let oldest = [];
    const births = people.map(({yearOfBirth}) => yearOfBirth); 
    const deaths = people.map(({yearOfDeath}) => yearOfDeath);
    const len = births.length-1;
      for (let i=0; i<=len; i++){
        oldest[i] = deaths[i]-births[i];
      }
      let maxIndex = oldest.indexOf(Math.max.apply(Math, oldest));
      let oldestPeople = people.map(({name}) => name)
      oldestPeople = [oldestPeople[maxIndex]];
        return oldestPeople;
  };

// Do not edit below this line
module.exports = findTheOldest;
