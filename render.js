const express = require('express'); // npm i --save-dev express가 설치되어있어야한다. 설치 후 node modules에서 확인 가능하다.

const app = express();

app.use("/public", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/hello/:nameParam", (req, res) => {
    res.render("hello", {name: req.params.nameParam});
});

app.listen(3000); // 포트 번호 설정