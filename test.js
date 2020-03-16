// test1('일반 선언식이 실행됨');
// test2('함수 표현식이 실행됨');

// // 일반적인 함수 선언 방식
// function test1(params) {
//   console.log(params);
// }

// // 함수 표현식으로 선언한 방식
// var test2 = function(params) {
//   console.log(params);
// };

// function test() {
//   console.log(this);
// }

// test();

// var test = () => {
//   console.log(this);
// };

// test();

// let arr = [1, 3, 5, 7, 9];

// arr.forEach(el => {
//   console.log(el);
// });

// arr.map(el => {
//   console.log(el);
// });

let arr = ['foo', 'hello', 'diamond'];
let arr2 = [];

arr.map(str => {
  arr2.push(str.length);
});

console.log(arr2);
