// 고차함수 (higher order function)
const colors = ['green', 'red', 'blue'];

// 고차함수를 사용하지 않고 출력하기
/* for (let i = 0; index < colors.length; 1++) {
  console.log(colors[i]); {
    
  }
} */

// 고차함수를 사용해서 출력하기 - 배열을 돌면서 원하는(콜백함수) 것을 할 때 사용한다.
// 자바스크립트에서도 같은 이름의 함수를 정의할 수 없다.
colors.forEach(function (value, index, array){
  console.log(value);
  console.log(index);
  console.log(array);
})
colors.forEach(function (value){
  console.log(value);
})

// arrow function으로 바꾸면?
colors.forEach((value) => console.log(value));

function myForEach(array, action){
  for (let i = 0; i < array.length; i++) {
    action(array[i]);
  }
}
console.log('-------------------------------------------------');
myForEach(colors, console.log);

/* 
  일급함수 -> first-class function
  : 함수를 값 처럼 사용할 수 있다면 일급함수라고 함.
  : 함수가 일반 객체처럼 모든 연산이 가능
  - 함수의 매개변수로 전달 (호출할 땐 절대로 괄호를 붙이지 않는다.)
  - 함수의 반환 값
  - 할당 명령문 사용
  - 동일비교 대상

  일급객체 -> first-class object 
  : 일반 객체 처럼 모든 연산이 가능한 것 
  - 함수의 매개변수로 전달
  - 함수의 반환 값
  - 할당 명령문 사용
  - 동일 비교 대상

  함수형 프로그래밍 >> 함수들까지 엮어놓은 것을 말함
  함수형 프로그래밍을 하면 데이터를 변경하지 않고,
  변수를 사용하지도 않고, 조건문과 반복문도 사용하지 않고 코딩 전개 가능함
  이렇게 사용하려면 순수함수로 정의하는 것이 중요
  
  순수함수란? 불변성을 지킨 함수를 말한다.
  함수 내부에서는 외부 상태 절대 변경하지 않는다.
  : 배열에서도 사용할 수 있는 고차함수가 많음
  인자로 함수를 받거나(callBack함수), 함수를 반환하는 함수를 고차함수라고 한다.
*/

// 조건에 맞는 아이템을 찾기 - find

const food1 = {menu:'🍔', price: 100};
const food2 = {menu:'🥩', price: 150};
const food3 = {menu:'🍗', price: 200};

const foods = [food1, food2, food3, food2];
let findItem = foods.find((value) => {
  return value.menu === '🥩';
})
console.clear();
console.log(findItem);
// findIndex를 사용하여 조건에 맞는 인덱스 출력하기
findItem = foods.findIndex((value) => value.menu === '🥩');
console.log(findItem);
findItem = foods.every((value) => value.menu === '🥩');
console.log(findItem);
// 조건에 맞는 걸 찾아서 새로운 배열 생성해줌 - 리액트 검색처리 할 때
// 새로운 배열을 만들어준다. - 중요!!
findItem = foods.filter((value) => value.menu === '🥩');
console.log(findItem);

// Map을 이용하기
let nums = [1, 2, 3, 4, 5];
let result = nums.map((item) => item - 1);
console.log(result);
resutl = nums.map((item) => {
  if(item % 2 === 0) return item * 0;
  else return item;
});
console.log(result);

// 원숭이를 호랑이로 교체하는 함수
let animals = ['😺', '🙉', '🐔', '🙉'];

function change(array){
  const newArray = Array.from(array); // newArray는 array에서 값을 받아온다. from
  for (let i = 0; i < newArray.length; i++) {
    if(newArray[i] === '🙉'){ // for문을 사용하여 if i번째 열에 원숭이가 있다면
      newArray[i] = '🐯' // i번째 열을 호랑이로 바꿔라
    }
    
  }
  return newArray;
}
console.log(change(animals));

// 재사용성을 높이는 함수 코드
function change2(array, from, to){
  const newArray = Array.from(array); // newArray는 array에서 값을 받아온다. from
  for (let i = 0; i < newArray.length; i++) {
    if(newArray[i] === from){ // for문을 사용하여 if i번째 열에 원숭이가 있다면
      newArray[i] = to; // i번째 열을 호랑이로 바꿔라
    }
    
  }
  return newArray;
}
console.log(change2(animals, '🙉', '🐯'));