/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!needle) return 0;
    let index = -1;
    let j = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[j] && j === needle.length - 1) {
            index = i - needle.length + 1;
            return index;
        }
        else if (haystack[i] === needle[j]) {
            j++;
        }
        else {
            i = i - j;
            j = 0;
        }
    }
    return index;
};

console.log(strStr('heello', 'el'))