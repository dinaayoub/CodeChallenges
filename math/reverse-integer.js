'use strict';

/**
 * @param {number} x
 * @return {number}
 */
var reverse = (x => {
    var upper, lower;
    upper = Math.pow(2, 31) - 1;
    lower = -Math.pow(2, 31);
    /* 
    //using strings
    console.log(upper + '  ' + lower)
    if (x >= lower && x <= upper) {
        var str = '' + x;
        var strArray = str.split('');
        //strArray.reverse();
        
        for (let i = 0; i < Math.floor(strArray.length / 2); i++) {
            let temp = str[i];
            strArray[i] = strArray[strArray.length - 1 - i];
            strArray[strArray.length - 1 - i] = temp;
        }
        if (strArray[strArray.length - 1] === '-') {
            strArray.unshift('-');
            strArray.pop();
        }

        console.log(strArray);
        var returnInt = parseInt(strArray.join(''), 10);
        if (returnInt>=lower && returnInt<=upper) return returnInt;
        else return 0;
    }
    else {
        return 0;
    }
    */

    //with math
    var reversedNum = 0;
    var negative = false;
    if (x <lower || x>upper ) return 0;
    if (x < 0) {
        negative = true;
        x = x * -1;
    }
    while (x != 0) {
        var pop = x % 10;
        x = Math.floor(x / 10)
        reversedNum = reversedNum * 10 + pop;
    }
    if (negative) {
        reversedNum = reversedNum * -1;
    }
    if (reversedNum<lower || reversedNum>upper) return 0;
    return reversedNum;
});