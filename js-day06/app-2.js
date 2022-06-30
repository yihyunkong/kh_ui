import {increase, getCount, count} from './account-2.js';
increase();
increase();
increase();
const c2 = getCount();
console.log('getCount() => ', getCount());
console.log('c2', c2);
console.log('count', count);



// 모듈화
// >> 모듈은 관련된 기능을 하나로 묶어
//    다른 코드와 결함도를 줄이고, 재사용성을 높인다.
// >> module 객체를 통해 각각의 기능이나 js 파일들을 쉽게 모듈화 가능하다.

/* 
  export: 코드를 외부에 보내고 싶다. (함수, 변수, 클래스등을 내보내기 가능)
*/