'use strict';

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    var number = x;
    var reverseNumber = 0;
    while (x!=0){
        let temp = x%10; 
        x = Math.floor(x/10);
        reverseNumber = reverseNumber*10 + temp;
        //console.log(`x = ${x}, reverseNumber = ${reverseNumber}`)
    }
    if (reverseNumber === number) return true;
    else return false;
};
//console.log(isPalindrome(123));