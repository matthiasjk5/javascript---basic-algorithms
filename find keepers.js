function findElement(arr, func) {
  return arr.filter(t => t % 2 === 0)[0];
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
