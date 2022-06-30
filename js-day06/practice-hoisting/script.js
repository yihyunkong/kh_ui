//console.log(a); // a를 선언하기 전에 a를 사용하고있다. 근데 왜 에러가 안뜨고 undefined가 나올까? a가 선언은 되었지만, 아직 할당되지 않은 상태이다.
/* var a = 1;
console.log(a); */

// 2, 3번 라인을 주석처리하면 'a is not defined' 오류 뜬다.


console.log(b);
b = 1;
var b;
console.log(b);
// >> var는 선언을 나중에 하고 값을 먼저 주어도 출력이 된다..;;


/* 
  전역변수: 어디서나 초기화 된 상태로 사용 가능하다. 
  지역변수: 함수나 메소드 내에서 선언된 변수는 그 안에서만 사용 가능하다.
*/
  function dd(){
    var c = 2;
    console.log(c); // >> 에러 ㄴㄴ 지역 내에서 호출되었기 때문에
  }
  //console.log(c); // c is no defined >> 지역을 벗어나면 에러가 발생한다. 


  for(var i=1; i<5; i++){
    console.log(i);
  }
  console.log(i) // 왜 5가 출력되지? var를 썼기 때문에.
  /* 
    var는 함수(function)만 !!!!! 지역변수로 호이스팅이 되고 (위의 function dd 참고)
    나머지는 다 전역변수로 올린다. for문, if문 .. 등등 function만 제외하고!!!!!!!!!

    만약 var를 let으로 바꾸면?
    for문 바깥의 console.log(i)에 error 메세지가 뜬다. i is not defined
    >> let i는 지역변수이므로 함수 바깥에서 사용하는 i는 정의되지 않은 값이다.
  */

  var x = 1;
  console.log(x);
  var x = 2;
  console.log(x);
  /* 
    변수명이 x로 똑같이 선언되었는데도 오류가 발생한다.
  */

  
  let a = 1;
  console.log(a);
  //let a = 2; // a is already... error
  console.log(a);
  /* 
    var가 아닌 let을 선언하면 a가 이미 선언되었다는 오류메세지가 뜬다.
  */



// let도 호이스팅이 될 수 있다.
// console.log(a); // cannot access 'a' before initialization.. >> tdz이기 때문에 a에 접근할 수 없어! (일시적으로 사각지대야)
// a가 선언되면 사용이 될거야!
// let a = 1;
// console.log(a);