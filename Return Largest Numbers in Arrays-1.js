function largestOfFour(arr) {
  let result = [];
  let largest = 0;
  arr.forEach(t => {
    largest = t[0];
    for (let i = 1; i < t.length; i++) {
      if (t[i] > largest) {
        largest = t[i];
      }
    }
    result.push(largest);
  });

  return result;
}

console.log(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);
