function isPrime(input) {
  //Enter your code here
  let inputArray = input.split('\n');

  for (let j = 1; j < inputArray.length; j++) {
    let done = false;
    let x = parseInt(inputArray[j]);
    if (x === 2 || x === 3) {
      console.log('Prime');
      done = true;
    }
    else if (x <= 1 || x % 2 === 0 || x % 3 === 0) {
      console.log('Not prime');
      done = true;
    } else {
      for (let i = 5; i <= Math.sqrt(x); i = i + 2) {
        if (x % i === 0) {
          console.log('Not prime');
          done = true;
          break;
        }
      }
    }
    if (!done) console.log('Prime');
  }
}

isPrime('3\n12\n5\n7\n3\n1');
console.log('----------');
isPrime('5\n0\n7\n1483\n10007\n10008\n625');
