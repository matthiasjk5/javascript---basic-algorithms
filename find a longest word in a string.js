function findLongestWordLength(str) {
  let temp = [];
  let longest = 0;
  temp = str.split(' ');

  temp.forEach(t => {
    if (t.length > longest) {
      longest = t.length;
    }
  });
  return longest;
}

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);
