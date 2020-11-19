'use strict';

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    if (n < 1 || n > 8) return '';
    const openParen = '(';
    const closeParen = ')';
    var arrayOfAllParens = [];
    var a = [];
    var b = [];
    //first, get the string of all number of paren opened and immediately closed
    for (let i = 0; i < n; i++) {
        a.push(openParen);
        a.push(closeParen);
        b.unshift(openParen);
        b.push(closeParen);

    }
    arrayOfAllParens.push(a.join(''));
    arrayOfAllParens.push(b.join(''));

    //then, get the string of all open paren first, then close paren last
    for (let i = 1; i < n; i++) {
        var c = b.slice(0);
        c.splice(i, 0, c.pop());
        arrayOfAllParens.push(c.join(''));
    }
    for (let i = n*2-1; i > 0; i--) {
        var d = b.slice(0);
        d.splice(i - 1, 0, d.shift());
        if (!arrayOfAllParens.includes(d.join('')))
            arrayOfAllParens.push(d.join(''));
    }
    return arrayOfAllParens;

};

console.log(generateParenthesis(4));