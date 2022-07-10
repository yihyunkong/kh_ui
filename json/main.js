import dept from './dept.json'
console.log(dept);
console.log(typeof dept); // json으로 나오면 좋겠는데 왜 object로 나오는거지?

// 객체
const user = { // 더블 쿼테이션을 사용하지 않았기 떄문에 JSON이 아니다.
  name: 'scott',
  age: 30,
  emails: [
    'test@hot.com',
    'nice@gmail.com'
  ]
}

console.log(user.name);
console.log(user.age);
user.age = 15;
console.log(user['age']);

console.log(user.emails);
console.log(user['emails'])
console.log(user['emails'][0]);
console.log(user['emails'][1]);

const str = JSON.stringify(user); // JSON 내장 객체 parse, stringify >> stringify는 js를 JSON으로 변환해준다.
console.log(str);
console.log(typeof str);

const obj = JSON.parse(str);
console.log(obj);
console.log(typeof obj);

console.log('user', user);
console.log(typeof user);

/* 
  JSON.stringify() 메서드는
  JavaScript 값이나 객체를 JSON 문자열로 변환합니다.
  선택적으로, replacer를 함수로 전달할 경우 변환 전 값을 변형할 수 있고,
  배열로 전달할 경우 지정한 속성만 결과에 포함합니다.
*/