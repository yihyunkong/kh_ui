const express = require('express');
const app = express()
// NodeJS로 부터 요청 객체와 응답 객체는 주입 받는다.
app.get("/kh/:id", (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    console.log(req.query);
    console.log(`mem_id: ${req.query.mem_id}, mem_pw: ${req.query.mem_pw}`);
    res.send("서버 응답 성공");
});

app.listen(3000);

/*
    http://localhost:3000/kh/tomato
    http://localhost:3000/kh/tomato?mem_id=apple&mem_pw=123
*/