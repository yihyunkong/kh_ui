// 변수 : 특정 데이터 값을 임시로 저장하는 공간
// -> 특정 값을 자주 사용해야할 때
// -> 반복적인 구문(값)이 여러 코드에 걸쳐서 빈번하게 사용될 때
// 변수의 선언 방식
// ES5 - var
// ES6 - let, const
//       ** Let : 변경될 수 있는 값
//          const : 고정 값
// 변수 작성 시 유의사항
// 숫자로 시작 불가, 특수문자(_, $) 불가, 예약어 불가, 한글 불가
// 대소문자 구분해야한다.
let i;
i=3;
const j=5;
//j = 6; // 상수인 경우에는 재정의가  불가능하다.
console.log(`변수 i ${i}, 변수 j ${j}`); 