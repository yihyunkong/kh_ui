let ename = "scott"; // 전역 스코프 선언
// 자바스크립트에서는 함수 내부에 또 다른 함수가 올 수 있다.
/* 
  함수 선언 방법은 2가지가 있다. 
  함수문, 함수식
*/

// var 변수 선언할 때만 호이스팅이 일어나는 줄 알았는데 그것도 아님,,

function methodA(){
  let i = 5;
  console.log(ename);
  console.log(i);
// insert here - before
  innerMethod(); // 호이스팅으로 인해 어디서 출력되어도 에러가 안뜬다.

  // 함수문 >> 함수문일 때는 hoisting 적용 (함수식에선 hoisting 적용 x)
  function innerMethod(){
    let j = 10;
    console.log(i);
  }
  // insert here - after

  // 함수식 (함수 표현식 - 호이스팅 x)
  // 함수식일 때 before
  const methodB = function(){
    console.log('methodB 호출 성공');
  }
  // 함수식일 때 after
  methodB();
}

methodA();
//console.log(i); // 함수 내에 선언된 변수(지역 스코프)는 함수 내에서만 출력이 가능하다.




/*
  scope애는 세갸지가 있다.
- 글로벌 스코프 : member variable, global variable >> 전역변수
                  애플리케이션이 실행되면 즉시 만들어지고 종료되면 사라진다.

- 함수 스코프 : 함수 안에서 정의됨 (main.ival, sub.ival)
                함수가 만들어졌다고 해서 스코프가 생긴다? 아니다. 
- 블록 스코프 : for(int i; 1!=1;) >> 블록을 진입했을 때 사용한다.
                init() -> service() -> destroy()
*/