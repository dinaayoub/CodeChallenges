'use strict';
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var arrayOfArrays = [];
    let maxLength = 0;
    for (let i = 0; i < strs.length; i++) {
        var array = strs[i].split('');
        if (maxLength > array.length) {
            maxLength = array.length;
        }
        arrayOfArrays.push(array);
    }
    
    console.log('max length = ',maxLength);
    console.log(arrayOfArrays);

    var longestPrefix = '';
            
    for (let i = 0; i < strs.length; i++) {
        for (let j = 0; j < maxLength; j++) {
            
        }
    }
}
console.log(longestCommonPrefix["float", "flight", "floor", "flower", "flour"]);