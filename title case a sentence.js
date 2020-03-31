const titleCase = str => {
  let result = str.split(' ');
  result = result.map(t => {
    t = t.toLowerCase();
    t = t.replace(t.charAt(0), t.charAt(0).toUpperCase());
    return t;
  });
  return result.join(' ');
};

console.log(titleCase("I'm a little tea pot"));
