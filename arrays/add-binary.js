/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function (a, b) {

  //edge case checking
  if (!a || a === '0') return b;
  if (!b || b === '0') return a;

  if (a.length !== b.length) {
    let length = Math.max(a.length, b.length);
    if (a.length !== length) {
      for (let i = a.length; i < length; i++) {
        a = '0' + a;
      }
    } else {
      for (let i = b.length; i < length; i++) {
        b = '0' + b;
      }
    }
  }

  //add zeros to the left 
  let aArray = a.split('');
  let bArray = b.split('');

  let carry = 0;
  for (let j = aArray.length - 1; j >= 0; j--) {

    if (aArray[j] === '1' && bArray[j] === '1') {
      if (carry === 0) {
        aArray[j] = '0';
        carry = 1;
      } else {
        aArray[j] = '1';
        carry = 1;
      }
    } else if (aArray[j] === '1' || bArray[j] === '1') { //in case of a 0 and 1
      if (carry)
        aArray[j] = '0';
      else {
        aArray[j] = '1';
      }
    } else if (carry) {
      aArray[j] = '1';
      carry = 0;
    }
    //otherwise, do nothing because aArray already has the right value in that bit. 
    //if we have reached the end and still have a carry, add it to the beginning of the array.
    if (j === 0 & carry === 1) {
      aArray.unshift('1');
    }
  }
  return aArray.join('');
}

console.log(addBinary('100101', '111'));