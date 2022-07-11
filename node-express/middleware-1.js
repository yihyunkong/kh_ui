const express = require('express');
const app = express()
// NodeJS로 부터 요청 객체와 응답 객체는 주입 받는다.
app.get("/", (req, res, next) => {
    console.log("first");
    next();
});

app.get("/", (req, res, next) => {
    console.log("second");
    res.send('응답처리...');
    return;
    next();
});

app.get("/", (req, res) => {
    console.log("third");
});
app.listen(3000);

/*
    http://localhost:3000/kh/tomato
    http://localhost:3000/kh/tomato?mem_id=apple&mem_pw=123
*/