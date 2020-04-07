function chunkArrayInGroups(arr, size) {
  let start = size;
  let result = [];

  for (let i = 0; i < arr.length; i += start) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
