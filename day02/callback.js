// 함수는 선언할 때는 저장공간 이지만,
// 사용할 때는 값으로 봐야한다.

// 이 과정을 모듈화라고 한다.
function add(num1, num2, callback) {
  if (callback) {
    callback(num1 + num2);
    return;
  }
  // 만약 callback자리에 함수가 전달되면 undefined로 인식하고 if문 즉,
  // 콜백함수를 실행하지 않을 것이다.
  // false 로 판단되는 것들 : 0, "", undefined
  return num1 + num2;
}

add(3, 5, function (result) {
  console.log(result / 2);
  // 우리가 원하는 결과값 계산 식을 적어준다.
});
// 일회성으로 사용할 함수이기 때문에 익명함수 사용
// result는 num1 + num2 즉 두 정수의 합을 받아줄 결과값 변수가 필요해서 넣은 것
