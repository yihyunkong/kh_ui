// 불변성을 지킨다. - 에러, 버그를 예방할 수 있다. >> 원본이 저장된다.
// 외부로부터 주어진 인자(object)를 함수 내부에서 변경할 수 없다. 
function callByReference(object){
  object.ename = 'tiger'; // 여기서 ename을 설정하면? 외부에서 입력한 object값을 읽을 수 없다.
  console.log(object);
}
const scott = { ename: 'scott'}
callByReference(scott);

function changeName(obj){
  return {...obj, ename: 'king'}; // spread연산자를 통해 값을 추가할 수 있음 >> react에서 활용빈도가 아주 높다.
}
let result = changeName(scott); // 그치만 scott은 추가도 안되고,, 변경도 안되었네
console.log(result);