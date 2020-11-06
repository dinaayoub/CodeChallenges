'use strict';

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var integer = 0;
    var array = s.split('');
    const romanNumerals = {
        I:1,
        V:5,
        X:10,
        L:50,
        C: 100,
        D: 500,
        M: 1000,
    }
    for (let i=0; i<s.length; i++) {
        let firstDigit = array.shift();
        let secondDigit = array[0];
        if (romanNumerals[firstDigit] < romanNumerals[secondDigit]) {
            integer -= romanNumerals[firstDigit];
        }
        else {
            integer+=romanNumerals[firstDigit];
        }
    }
    return integer;
};
console.log(romanToInt('XIV'));