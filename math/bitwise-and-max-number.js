/*Task
Given set S= {1,2,3,4,5} Find two integers, A and B (where A<B ), from set S such that the value of A&B is the maximum possible
and also less than a given integer, K. In this case, & represents the bitwise AND operator. */
function maxBitwiseAnd(N, K) {
  let S = [];
  for (let i = 0; i < N; i++) {
    S[i] = i + 1;
  }
  let max = -Infinity;

  for (let j = 0; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      let anded = S[j] & S[k];
      if (anded > max && anded < K) {
        max = S[j] & S[k];
      }
    }
  }
  console.log(max);
}

console.log(1 & 2);