// 상품명과 가격을 JSON으로 만든다.
// 위 JSON을 JS 객체로 변환한다.
// 각각의 프로퍼티를 출력한다.
// JSON으로 변환한 뒤 출력한다.

// var sell = { name: "사과", price: "2000" };
// var sellfile = JSON.stringify(sell);
// console.log(sellfile);

// console.log(JSON.parse(`{"name":"사과","price":"2000"}`).name);
// console.log(JSON.parse(`{"name":"사과","price":"2000"}`).price);

var sell = `{ "name": "사과", "price": "2000" }`;
var sellfile = JSON.parse(sell);
console.log(sellfile.name);
console.log(sellfile.price);

sell = JSON.stringify(sellfile);
console.log(sell);
