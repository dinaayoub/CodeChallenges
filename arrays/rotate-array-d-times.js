function rotLeft(a, d) {
  let temp = a.slice(0, d);
  for (let i = d; i < a.length; i++) {
    a[i - d] = a[i];
  }
  for (let j = 0; j < temp.length; j++) {
    a[a.length - d + j] = temp[j];
  }
  return a;
}
