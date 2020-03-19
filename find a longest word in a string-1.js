function findLongestWordLength(str) {
  let result = [];
  let count = 0;
  let index = -1;

  result = str.split(' ');

  for (let i = 0; i < result.length; i++) {
    if (result[i].length > count) {
      count = result[i].length;
      index = i;
    }
  }

  return `Longest word: ${result[index]}, ${count}`;
}

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);
