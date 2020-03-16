function convertToF(celsius) {
  if (celsius === undefined) {
    return 'Celcius should be numbers';
  } else {
    let fahrenheit;
    fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
  }
}

console.log(convertToF(x));
