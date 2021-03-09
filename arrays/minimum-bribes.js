const object = require('./res.json');

const val = object.value.split(' ');
console.log(val);

function minimumBribes(queue) {
  /*Create a function minimumBribes that takes in a number of people in the queue, and console logs the number of minimum bribes
  Declare minimum bribes = 0;
  Declare a queue where length = n-1 and each value is = index + 1 , call it temp
  Loop on the resulting queue from i=0 to i<queue length
  If result queue at I is temp at I, do nothing.
  If result queue at I is temp at i+1 bribe ++;
  If result queue at I is temp at i+2 -> bribe +=2
  If result queue at I is > temp at i+2 --> too chaotic
  */
  let minBribes = 0;
  let temp = [];
  for (let i = 0; i < queue.length; i++) {
    temp[i] = i + 1;
  }

  for (let j = 0; j < queue.length; j++) {
    if (queue[j] == temp[j + 1]) {// => min bribes + 1
      minBribes++;
      let num = temp.splice(j + 1, 1);
      temp.splice(j, 0, num);
    } else if (queue[j] == temp[j + 2]) {
      minBribes += 2;
      let num = temp.splice(j + 2, 1);
      temp.splice(j, 0, num);
    } else if (queue[j] > temp[j + 2]) {
      minBribes = 'Too chaotic';
      break;
    }
  }
  console.log(minBribes);
  return minBribes;
}


minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]); // expected output: 7
minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]); // expected output: 4
minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]); // expected output: Too chaotic
minimumBribes(val);