function guguDan(i, j){
  for (let i = 2; i <= 9; i++) { // 2단에서 9단 까지
    console.log(i + '단');
    for (let j = 1; j <= 9; j++) {
      console.log(i + '*' + j + "=" + (i * j))
    }
  }
}
console.log(guguDan());