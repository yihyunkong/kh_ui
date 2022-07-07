const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK');
  }, 2000);
  resolve('OK');
  //reject('Fail')
});
p.then((ok) => { // then 메소드를 통해서 promise 사용 가능?
  console.log('첫번째 성공');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('두번째 성공');
    }, 3000);
  })
  console.log(ok);
}) .then(function (ok){
  console.log(ok);
})
.catch((error) => {
  console.log(error);
});