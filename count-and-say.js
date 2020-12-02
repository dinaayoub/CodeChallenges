/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) return '1';
    else {
        var result = '1';
        for (let i = 2; i <= n; i++) {
            var tempValue = '';
            var counter = 0;
            var arrayOfN = result.split('');
            result = '';
            tempValue = arrayOfN[0];
            for (let j = 0; j < arrayOfN.length; j++) {
               if (arrayOfN[j] === tempValue) { 
                    counter++; 
                }
                else {
                    result += `${counter}${tempValue}`;
                    tempValue = arrayOfN[j];
                    counter = 1;
                }
                if (j === arrayOfN.length-1) result += `${counter}${tempValue}`;   
            }
        }
        return result;
    }
};
console.log(countAndSay(6));