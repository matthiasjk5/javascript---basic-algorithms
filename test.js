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

var test = () => {
  console.log(this);
};

test();
