/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let array = s.split(' ');
  if (!array) return 0;
  let lastWord = array[array.length - 1];
  if (lastWord.length === 0) {
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i].length) {
        lastWord = array[i];
        break;
      }
    }
  }
  return lastWord.length;
};

console.log(lengthOfLastWord("b   a    "));