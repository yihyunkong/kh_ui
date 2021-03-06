// 함수
// : 함수도 객체이다. (주소번지를 가지고 있다.)
// : 메소드 오버로딩, 오버라이딩 지원이 없다.
// : 같은 이름의 메소드를 중복해서 정의할 수 없다.

function hap(a, b){
  const result = a + b; // 변수 선언을 하고 리턴값에 변수이름을 넣어도 된다. (?)
  return a+b;
}

console.log(hap(1, 3));
console.log(typeof result);

let lastName = '김';
let firstName = '춘추';
let fullName = `${lastName} ${firstName}`;

let lastName2 = '이';
let firstName2 = '순신';
let fullName2 = `${lastName2} ${firstName2}`;

function namePrint(firstName, lastName){
  return `${lastName} ${firstName}`;
}

console.log(namePrint(firstName, lastName));
console.log(namePrint(firstName2, lastName2));

// total 변수도 hap과 동일한 메모리 주소를 갖는다.
const total = hap;
console.log(hap(2, 3));
console.log(total(2, 3));