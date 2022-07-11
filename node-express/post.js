const express = require('express');
const app = express();
app.use(express.json());
// NodeJS로 부터 요청 객체와 응답 객체는 주입 받는다.
app.post("/", (req, res) => {
    console.log(res.body);
});

app.listen(3000);

/*
    http://localhost:3000/kh/tomato
    http://localhost:3000/kh/tomato?mem_id=apple&mem_pw=123
*/