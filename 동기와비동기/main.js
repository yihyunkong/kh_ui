function add(x){
  return x+2; // js에서 리턴값이 없다면 뭐가 반환이 될까? undifine
}

function account(a, b, cb){
  setTimeout(() => {
    cb(a + b)d;
  }, 2000) // 약 2초 후에 실행이 된다.
}
const result = add(3);
//console.log(result);
const temp = result;

const result2 = account(10, 20, (result) => {
  console.log('result : ' + result)
});
const temp2 = result2;
console.log('temp2 : ' + temp2); 

/* 
  
*/

// setTimeout() 함수를 이용하여 시간을 지연시킬 수 있다.
setTimeout(() => {console.log("첫 번째 메시지")}, 5000);
setTimeout(() => {console.log("두 번째 메시지")}, 3000);
setTimeout(() => {console.log("세 번째 메시지")}, 1000);


console.log("1st");
console.log("2nd");
console.log("3rd");

/* 
  자바와 자바스크립트의 차이
  1. 컴파일 유뮤
  2. 순차적 (호이스팅)
  3. 자바는 동기코드, js는 비동기코드 (비동기처리를 지원하는 ajax api, XMLHttpRequest)
*/


/* 
  함수문과 함수식의 차이 알기 (호이스팅 가능/불가능)
*/