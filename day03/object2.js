// Object() , object 프로토타입
var user = new Object();
// user라는 객체 생성
// 자바스크립트에서는 생성자를 프로토타입이라 함
// 처음에는 프로퍼티 이름도 값도 모르기 때문에 객체로만 선언해 놓는다.
// 그 후 밑에서 마침표로 선언
user.useId = "hds1234";
user.userPW = "1234";
user.userAddress = "문래역";
user.userPhoneNumber = "01012341234";
user.userName = "한동석";

console.log(user);

// 메소드 1)
// user.info = info; >> 여기서는 소괄호를 쓰면 안된다,그러면 리턴값을 넣게된다
// function info(){
//     console.log(this.userName + "입니다.");
// }

// 메소드 2)
user.info = function () {
  console.log(this.userName + "입니다");
  // 여기서 this가 쓰이는 것은 이 함수가 '함수'가 아닌 '메소드'로
  // 쓰일 것이라는 걸 감지할 수 있음
};

user.info();
