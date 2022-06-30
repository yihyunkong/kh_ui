const btns = document.querySelectorAll('ul li'); // 퀴리셀렉터는 태그 접근하는 것. (ul 밑의 li에 접근하겠다.)

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => { // 첫번째 파라미터로 이벤트 처리
    console.log(i);
  }); 
  
}

// 호이스팅 문제를 즉시실행함수로 해결함
for (var x = 0; x < btns.length; x++) {
  ((index) => {
    btns[x].addEventListener('click', () => { // 첫번째 파라미터로 이벤트 처리
      console.log('index => ', index);
    })
  })(x); 
  
}




// ES5 - var - 전역변수와 지역변수 
// ES6 - let으로 변경
// 호이스팅
// : 블록 안에서 선언된 지역변수가 코드 블록 밖으로 나와 강제로 전역변수화 됨