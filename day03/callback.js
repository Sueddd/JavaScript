// 상품명, 가격, 개수를 전달받은 뒤 전체 금액을 출력한다.
// 1. 상품명과 가격, 개수는 A함수에서 전달받는다.
// 2. B함수에서는 상품명과 전체 금액을 전달받아서 출력한다.
// 3. A함수는 B함수를 callback함수로 전달받는다.

function pay(name, price, count, callback) {
  let total = price * count;
  if (callback) {
    callback(name, total);
  }
}

pay("허니콤보치킨커피", 25000, 10, function (name, total) {
  console.log(name + "총 금액 :" + total + "원");
});
