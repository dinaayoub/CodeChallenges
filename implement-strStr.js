/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    var charHaystack = haystack.split('');
    var charNeedle = needle.split('');

    if (needle === '') return 0; //empty string passed in
    var startOfString = -1;
    var j = 0;
    for (let i = 0; i < charHaystack.length; i++) {
        if (charHaystack[i] !== charNeedle[j]) {
            j = 0;
            startOfString = -1;
        } else if (j!==0 && j === needle.length - 1) {
            //we've matched the entire string! return the index of the start of the string
            console.log('match found at i = ' + i + ' and j = ' + j);
            return startOfString;
        } else if (j === 0) {
            console.log('start of string set to i = ' + i);
            startOfString = i;
            j++;
        } else {
            //only happens if needle is > 2 characters. 
            j++;
        }

    }
    return startOfString;
};

console.log(strStr('heello', 'el'))