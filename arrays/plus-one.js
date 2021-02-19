/**
 * @param {number[]} digits
 * @return {number[]}
 */

// var plusOneMath = function (digits) {
//   let str = digits.join('');
//   console.log({ str });
//   let num = parseInt(str);
//   console.log({ num });
//   num++;
//   return num.toString().split('');
// }

var plusOne = function (digits) {

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] != 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
        return digits;
      }
    }
  }

};

console.log(plusOne([9, 9, 9]));