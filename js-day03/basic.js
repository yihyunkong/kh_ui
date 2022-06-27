function hap(a, b){
  return a+b;
}
// react에서는 arrow function을 사용한다.
const hap2 = (a, b) => {
  return a+b;
}
const hap3 = (a, b) => a+b;
const total = hap; // 함수도 Object이므로 주소번지를 가지기 때문에
console.log(total(2, 3));
console.log(hap2(2, 3));
console.log(hap3(2, 3));

// 이 부분 제대로 이해하기~!~!
const minus  = (a, b) => a-b; //  minus 함수에 대한 주소번지가 생긴다.
const multiply = (a, b) => a*b;
// 전달된 action은 callBack 함수이다. - java actionPerformed(Action ae)
// 네가 요청하면 언젠가 실행해줄게 !! 
function account(a, b, action){ // 마이너스도 사용하고 싶고,,, 곱하기도 사용하여 값을 얻고싶은데 사용하는 파라미터 값이 같다? 그럼 action을 사용해서 어떤 함수인지 알려줘야한다. 
  let result = action(a, b); // action은 minus or multiply >> 고차함수
  console.log(result);
  return result;
}
// 어떤 함수가 전달되는가에 따라 계산 결과가 달라진다.
console.log(account(2, 1, minus)); // 함수를 가리키는 주소번지를 넘긴다.
console.log(account(2, 1, multiply))

// 즉시 실행 함수 - IIFE

/* 
  입력 - 처리 - 출력
  >> 처리와 관련있는 것 : function(함수), operator

  함수의 정의 : 특정한 일을 수행하는 집합
                함수도 Object이다. (주소번지를 가진다.)
                callBack 함수에서는 함수의 이름은 함수를 참조한다. 
*/              