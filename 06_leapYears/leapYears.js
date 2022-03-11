const leapYears = function(leapYears) {
    if (leapYears%100 == 0 && leapYears%400 != 0 && leapYears%4 !=0) return false;
    else return true;
};

// Do not edit below this line
module.exports = leapYears;
