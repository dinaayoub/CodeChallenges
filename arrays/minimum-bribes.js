function minimumBribes(queue) {
  let correctOrder = [];
  for (let i = 0; i < queue.length; i++) {
    correctOrder[i] = i + 1;
  }
  console.log(correctOrder);
  if (queue === correctOrder) return 0;
  let minBribes = 0;
  for (let j = queue.length - 1; j > 0; j--) {
    console.log(`j = ${j}`);
    console.log('queue at ' + j + ' = ', queue[j]);
    console.log('correct at ' + j + ' = ', correctOrder[j]);
    if (correctOrder[j] === queue[j]) {
      console.log('element in its correct position.')
    }
    else if (correctOrder[j] === queue[j - 1]) {
      minBribes++;
      let popped = correctOrder.pop();
      correctOrder.splice(j - 1, 0, popped);
      console.log(`incrementing bribes by 1, minBribes = ${minBribes}`)
      console.log('new correctOrder = ', correctOrder);
    }
    else if (correctOrder[j] === queue[j - 2]) {
      minBribes += 2;
      let popped = correctOrder.pop();
      console.log('popped off correctOrder = ', correctOrder);
      correctOrder.splice(j - 2, 0, popped);
      console.log(`incrementing bribes by 2, minBribes = ${minBribes}`)
      console.log('new correctOrder = ', correctOrder);
    }
    else {
      console.log('Too chaotic');
      return;
    }
  }
  console.log(minBribes);
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]);