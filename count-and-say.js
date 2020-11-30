/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) return '1';
    else {
        var result = '1';
        var pointer = 0;
        var tempValue = '';
        var counter = 0;
        for (let i = 1; i <= n; i++) {
            var arrayOfN = result.split('');
            tempValue = arrayOfN[0];
            for (let j = 0; j< arrayOfN.length; j++) {
                if (arrayOfN[j] === tempValue) counter++;
                else {
                    result += counter + tempValue;
                    tempValue = arrayOfN[j];
                }
            }
        }
    }

};
console.log(countAndSay(2));