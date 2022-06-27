// return을 명시적으로 하지 않으면 자동으로 undefined이 반환된다.
// 함수 중간에 return을 사용하면 함수가 종료된다.

function hap(a, b){
  console.log(a + b);
}

let imsi = hap(2, 3);
console.log(imsi); // function에 리턴을 설정해주지 않으면 undefined

function print2(num){
  if(num < 0) return;
  console.log(num);
}
print2(-5);
print2(5);

// APP
// 입력 - 처리 = 출력 

// 특정한 일을 수행하는 코드 집합
// 유지보수, 재사용성, 가독성
// 함수도 Object이므로 주소번지를 가지게 되고, 함수가 있는 곳은 다른 곳이다.

// 함수의 이름은 함수를 참조한다.