/*
  배열
  : 연관된 값들을 하나의 그룹으로 묶어서 나열한 자료구조
*/
const colors = ["blue", "orange", "green"];
console.log(colors);
//  arrow function
colors.forEach((color) => console.log(color)); // colors 배열을 각각 보여준다. forEach
colors.forEach(function(color) {
  console.log(`element ==> ${color}`);
});
colors[1] = "black";
colors.map((color) => console.log("map", color));

const copy = [];

for(let i=0; i<colors.length; i++) {
  copy.push(colors[i]);
  console.log(`copy[${i}] : ${copy[i]}`);
};

colors.forEach(function(item) {
  copy.push(item);
  console.log(`copy : ${copy}`);
});

function add(a, b) {
  const result = a + b;
  return result;
}

const add1 = function(a, b) {
  const result = a + b;
  return result;
}

// 화살표 함수 - 기존의 익명함수를 좀 더 쓰기 편하게 축약한 형태
const add2 = (a, b) => {
  const result = a + b;
  return result;
}

add(3, 4);
console.log(add2(3, 4));

const msg = (txt) => {
  return txt;
}

// 내부로 전달되는 파라미터가 하나면 괄호는 생략 가능하다.
const msg2 = (txt) => txt;

console.log(msg2('hello arrow function'));

