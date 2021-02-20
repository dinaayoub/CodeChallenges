/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;

  let left = 1;
  let right = x;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let pow = mid * mid;
    if (pow === x) {
      return mid;
    } else if (pow > x) {
      right = mid;
    } else if (ppow < x) {
      left = mid + 1;
    }
  };
  return left - 1;
}

console.log(mySqrt(9));