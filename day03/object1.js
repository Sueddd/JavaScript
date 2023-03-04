// {} 중괄호
var account = {
  owner: "한동석",
  code: "1234",
  balance: 10000,
  deposit: function (money) {
    this.balance += money;
  }, // 예금
  withdraw: function (money) {
    this.balance -= money;
  }, // 출금
};

account.number = "110-111-111111"; // 선언
account.withdraw(3000); // 이렇게 주면 balance는 7000원이 남을 것
with (console) {
  log(account);
  log(account.owner);
  log(account["balance"]);
}



















