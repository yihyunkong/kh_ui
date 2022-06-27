// 연산자 : 특정 값을 도출하기 위해 연산 처리 식별자
// 산술연산자
// 대입연산자
// 비교연산자

let num = 0;
num = num + 2;
console.log(num);
num += 3;
console.log(num);
// ==
// === 타입까지도 비교한다. 
console.log(1 == 1);
console.log(1 === 1);
console.log(2 == '2');
console.log(2 === '2');

const myCar = {
  name: '소나타',
  color: 'red',
  speed: 50,
}
const himCar = {
  name: '소나타',
  color: 'red',
  speed: 50,
}
console.log(myCar == himCar);
console.log(myCar === himCar);
console.log(myCar.name == himCar.name);
console.log(myCar.name === himCar.name);

let herCar = himCar;
console.log(herCar == himCar);
console.log(herCar === himCar);

// 선언문
let b;
b = 2; // 표현식, 할당문
let a = b = 2;
console.log('a' + a);