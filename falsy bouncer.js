function bouncer(arr) {
  return arr.filter(el => {
    if (el) return true;
    return false;
  });

  // return result;
}

console.log(bouncer([7, 'ate', '', false, 9]));
