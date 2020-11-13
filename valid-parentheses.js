/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var openingParen = ['{', '[', '('];
    var closingParen = ['}', ']', ')'];

    var array = s.split('');
    var opens = [];
    for (let i = 0; i < array.length; i++) {
        if (openingParen.indexOf(array[i]) > -1) {
            opens.push(array[i]);
        } else {
            //assuming the string only contains paren, we don't need another if condition here
            if (opens[opens.length - 1] === openingParen[closingParen.indexOf(array[i])]) {
                opens.pop();
            } else {
                return false;

            }
        }
    }
    if (opens.length === 0) return true;
    else return false;
};
console.log(isValid('{[]}'));