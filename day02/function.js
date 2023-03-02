/* Js에서는 오버로딩을 지원하지 않는다. */
// 같은 이름으로 여러 개의 함수를 선언하면, 가장 마지막에 선언한 함수로 사용된다.
// function 키워드로 선언
// 매개변수는 자료형 쓸 필요가 없다
// function add(num1, num2) {
//   return num1 + num2;
// }
// // 가장 마지막 함수가 실행된다(최종), 오버로딩 안된다
// function add(num1, num2, num3) {
//   return num1 + num2 + num3;
// }
// // JS 함수는 매개변수의 개수보다 적게 전달해도, 많이 전달해도 오류가 나지 않는다.
// console.log(add(1, 3));
// // 마지막 세번째 매개변수를 전달하지 않았지만, 오류는 안난다
// // 전달하지 않은 num3는 undefiend를 갖고 있고, 그래서 NaN값이 결과적으로 나온다.
// // NaN이 나오는 건 이건 숫자가 아니다 라고 알리는 것
// console.log(add(1, 3, 4));
// // 가변인자 = 배열로 받겠다, 마침표를 3개 써서 여러 개를 컴마로 전달 받겠다.
// // 가변인자 = 전달받는 값들의 개수가 변할수 잇음
// // args = 배열 이라는 뜻
// function add(...args) {
//   var total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// }
// 실행결과 4,8이 나오는데 이는 모두 함수 호이스팅 때문이다.
// 일반 매개변수와 가변인자를 섞어서 쓰기
// 가변인자는 항상 뒤에 적어줘야 한다.
function intro(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log("이름 : " + name);
    for (var i = 0; i < args.length; i++) {
        console.log("기타정보 : " + args[i]);
    }
}
// 타입스크립트에서는 (name : string, ...args : any) 해줄 수 있따.
intro("박희수", 23, "서울");
// 쉿
// npm instal typescript --save-dev // 타입스크립트 디폴트
// npm install -g typescript // 타입스크립트 본체
// npm install -g ts-node @types/node
// npx tsc => 버전 확인
// tsc --init
// 1) visaul studio 관리자 권한으로 실행
// Set-ExcutionPolicy Unrestricted
// tsc --init
// 파일 확장자를 .ts로 변경
// ts 파일을 js파일로 변환 - tsc 파일명.ts
// tsc 파일명.ts => tsc의 c는 컴파일의 약자 타입스크립트의
// 컴파일러로 해당 타입스크립트의 파일을 실행하면 번역 파일로
// 자바스크립트 파일이 나오고, 그걸 노드 명령으로 실행
// 변환된 js파일을 node로 실행한다 - node 파일명.js
