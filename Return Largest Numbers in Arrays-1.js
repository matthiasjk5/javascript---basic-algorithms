function largestOfFour(arr) {
  let result = [];
  let largest = 0;
  arr.forEach(t => {
    largest = t[0];
    for (let i = 1; i < t.length; i++) {
      if (t[i] > t[0]) {
        largest = t[i];
      }
    }
    result.push(largest);
  });

  return result;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);
