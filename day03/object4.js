// 프로토타입
// new 뒤에 나오는 생성자를 자바스크립트에서는 프로토타입이라고 부른다.
// 프로토타입은 함수로 선언하여 사용한다. 단, 반드시 대문자로 시작해준다.

// 함수를 쓸 때는 소문자로 쓰고 프로토타입은 반드시 대문자로 시작
// 이 생성자는 new를 사용해서 객체로 사용할 것이기 때문에 여기있는 는
// 얘를 호출한 객체가 되는 것이다.
function User(id, pw, name, age) {
  this.id = id;
  this.pw = pw;
  this.name = name;
  this.age = age || 1; // 앞에있는 값이 false면 1을넣음, 1은 디폴트값
  this.intro = function () {
    with (console) {
      log(this.id);
      log(this.pw);
      log(this.name);
      log(this.age);
    }
  };
}

han = new User("hds1234", "1234", "한동석", 20);
hong = new User("hgd1234", "4444", "홍길동", 40);
han.intro();
hong.intro();

// ** JSON 이용 **

// 1)
console.log(JSON.stringify(han));
// 객체를 stringify로 감싸서 문자열 처리가 되고, key값에는 따옴표가 붙고
// JSON 형식으로 변하게 된다.
// 객체 그대로 출력된다, 그러나 메소드는 포함이 안된다
// 메소드는 당연히 데이터 전달을 위해 쓰지 않기 때문인다.

//2)
// `{"id":"hds1234","pw":"1234","name":"한동석","age":20}`
// JSON형식을 갖고 와 ``로 감싸준다. 이러면 다시 제이슨 형식으로 인식되고,
// 다시 자바스크립트 객체로 만들어줘야 프로퍼티로 접근이 쉽ㄴ다.

//3)
console.log(
  JSON.parse(`{"id":"hds1234","pw":"1234","name":"한동석","age":20}`).id
);
// JSON.parse에 넣어주면 object(객체)로 변경된다
