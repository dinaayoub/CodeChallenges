"use strict";

function findInflectionPoint(array) {
  if (array.length < 3)
    return null;
  let inflectionPoint = null;
  let direction = '';
  let end = array.length - 1;
  let start = 0;
  let mid = Math.floor((start + end) / 2);
  if (array[start] < array[mid] && array[end] < array[mid]) {
    //going up
    direction = '+';
  } else if (array[start] > array[mid] && array[end] > array[mid]) {
    //going down 
    direction = '-';
  } else if ((array[start] > array[mid] && array[end] < array[mid]) ||
    (array[start] < array[mid] && array[end] > array[mid])) {
    //should never happen, there is no inflection point!
    return null;
  }  //else, need to deal with the numbers being equal?

  while (start < end) {

    mid = Math.floor((start + end) / 2);
    if (array[mid + 1] > array[mid] && array[mid - 1] > array[mid] ||
      array[mid + 1] < array[mid] && array[mid - 1] < array[mid]) {
      return mid;
    }
    else if ((direction === '+' && array[mid + 1] < array[mid]) ||
      (direction === '-' && array[mid + 1] > array[mid])) {
      end = mid;
    } else if ((direction === '+' && array[mid + 1] > array[mid]) ||
      (direction === '-' && array[mid + 1] < array[mid])) {
      start = mid;
    } else if (array[start] === array[mid]) {
      //need to handle the case of the numbers being equal, like [7,7,7,9,7]
      start++;
    } else if (array[end] === array[mid]) {
      end--;
    }
  }
  return inflectionPoint;
}

console.log(findInflectionPoint([1, 2, 3, 2, 1])); //answer should be 2
console.log(findInflectionPoint([37, 33, 32, 31, 29, 28, 27, 34, 38])); //answer should be 6
console.log(findInflectionPoint([7, 9, 7, 7, 7])); //should return 1
console.log(findInflectionPoint([7, 7, 7, 9, 7])); // should return 3
console.log(findInflectionPoint([1, 2, 3, 4, 5])); //should return null



    // let diff = array[1] - array[0];

    // for(let i = 1; i< array.length; i++) {
    //     //assumption: always increasing or decreasing
    //     if (diff>0 && array[i] > array[i-1]) {
    //         //inflection point not found
    //         continue
    //     } else if (diff<0 && array[i]<array[i-1]){
    //         //inflection point not found
    //         continue;
    //     } else {
    //         inflectionPoint = i-1;
    //         break;
    //     }
    // };