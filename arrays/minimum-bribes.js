function minimumBribes(queue) {
  let correctOrder = [];
  for (let i = 0; i < queue.length; i++) {
    correctOrder[i] = i + 1;
  }
  console.log(correctOrder);
  let minBribes = 0;
  for (let j = queue.length - 1; j > 1; j--) {
    console.log('queue at ' + j + ' = ', queue[j]);
    console.log('correct at ' + j + ' = ', correctOrder[j]);
    if (correctOrder[j] === queue[j - 1]) minBribes++;
    else if (correctOrder[j] === queue[j - 2]) minBribes += 2;
    // else return 'Too chaotic'
  }
  return minBribes;
}

console.log(minimumBribes([2, 1, 5, 3, 4]));