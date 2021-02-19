'use strict';
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var arrayOfArrays = [];
    let maxLength = 5000;
    for (let i = 0; i < strs.length; i++) {
        var array = strs[i].split('');
        if (maxLength > array.length) {
            maxLength = array.length;
        }
        arrayOfArrays.push(array);
    }
    //console.log('max length = ', maxLength);
    //console.log(arrayOfArrays);

    var longestPrefix = '';
    
    for (let i = 0; i < maxLength; i++) {
        var char = '';
        var bool = true;
        for (let j = 0; j < arrayOfArrays.length; j++) {
            if (char === '') {
                char = arrayOfArrays[j][i];
                //console.log('char = ', char);
            } 
            if (j === (arrayOfArrays.length - 1) && char === arrayOfArrays[j][i]) {
                longestPrefix += char;
                //console.log('longest prefix = ', longestPrefix);
            }
            if (char !== arrayOfArrays[j][i]) {
                bool = false;
                //console.log('BREAK!');
                break;
            }

        }
        if (!bool) break;
    }
    return longestPrefix;
}
//console.log(longestCommonPrefix(["cir","car"]));