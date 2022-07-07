// javascript is synchronous. 자바스크립트는 동기적이다.
console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000)
console.log(2);
console.log(3);