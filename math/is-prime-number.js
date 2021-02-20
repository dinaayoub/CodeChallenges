function isPrime(input) {
  let inputArray = input.split('\n');

  for (let j = 1; j < inputArray.length; j++) {
    let x = parseInt(inputArray[j]);
    let half = Math.floor(x / 2);
    // console.log(`x = ${x}, half = ${half}`);
    if ([2, 3, 5].indexOf(x) !== -1) {
      console.log('Prime');
      continue;
    }
    if ((x / 2) !== half) {
      //odd number, can be prime

      //need to check whether it's divisible by any odd prime numbers smaller than its half?
      for (let i = 3; i <= half; i = i + 2) {
        if (x % i === 0) {
          console.log('Not prime');
          break;
        }
        if (i === half) {
          //last iteration and x is not divisible by half, this must be a prime number. 
          console.log('Prime');
          break;
        }
      }
    }
    else {
      //even number, can't be prime
      console.log('Not prime');
    }
  }
}

isPrime('3\n12\n5\n7\n3');
console.log('----------')
isPrime('5\n0\n7\n1483\n10007\n10008');
