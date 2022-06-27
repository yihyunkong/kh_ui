// 자료형
/* 
  원시형 타입 (Primative type) >> 단일데이터 - Stack 공간에 담긴다. 
    - 문자, 숫자, 논리형, undefinded - 변수를 선언하고 값을 할당하지 않으면 undefined가 저장됨

  참조형 타입 (Reference type) >> 복합데이터{key:value} - Heap 공간에 담긴다. 
        {
          id: 'tomato',
          pw: '123'
        }
    : 값이 위치하고 있는 참조 주소 값만 메모리에 저장된다. >> js에서는 함수도 객체이다.
    - null : 특정 변수의 값을 비워둘 때 
    - array : 연관된(row) 값들을 그룹으로 묶어서 관리
    - 객체 : Object 데이터를 key라는 인덱싱을 통해서 자료를 구조적으로 묶어놓은 상태
*/

let v;
console.log(v);

v = null;
console.log(v);
console.log(typeof 123);
console.log(typeof '123');
console.log(typeof null);
console.log(typeof undefined);

let name = 'tomato';
let color = 'red';
let display = '🍅';

let tomato = {
  name: 'tomato',
  color: 'red',
  display: '🍅'
};

console.log(tomato);
console.log(tomato.name);
console.log(tomato.color);
console.log(tomato.display);

// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a;
b = 2;
console.log(a);
console.log(b);

// 객체타입은 참조값(메모리 주소, 레퍼런스)이 복사되어 전달됨 
let orange = { // 번지값이 32568이라면
  name: '오렌지',
}
let apple = orange; // 32568
apple.name = '사과'; // 여기서 apple의 이름을 사과로 바꾼다면? 아래 콘솔에 출력되는 orange도 사과로 바뀐다. 
console.log(orange);
console.log(apple);

// 지수(거듭제곱) **
console.log(Math.pow(5, 2));
console.log(5**2);

// + 연산지 주의 >> concat이 된다.
let text;
text = 10 + '10'; // 숫자와 문자열을 더하면 문자열로 변환된다.
console.log(text);
console.log(typeof text);

// 할단 연산자
let aa = 1; 
aa += 2; // 먼저 더하고 나중에 대입한다. - 축약버전
