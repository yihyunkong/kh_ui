//import express from "express";
// 아래에서 require를 사용하려면 package.json에서 type: module이 아닌 commonjs로 변경해주어야한다.
// ES6를 사용하려면 type: module로 정의한다.
const express = require('express'); // npm i --save-dev express가 설치되어있어야한다. 설치 후 node modules에서 확인 가능하다.
// NodeJS에 CommonJS를 사용하면
// ES6 import express from "express"와 같음
const app = express();

app.get("/", (req, res) => {
    console.log("get");
    res.send("안녕하세요. 서버의 <font color=red>응답</font>입니다.");
});

app.listen(3000); // 포트 번호 설정
