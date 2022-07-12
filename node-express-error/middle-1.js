const express = require('express');
const app = express(); // 객체 생성 - heap 영역에 쌓인다. 함수는 stack 메모리에 >> (heap, stack memory[함수의 호출 순서대로 first in last out])

app.get("/", (req, res, next) => { // get의 자리에는 all, (use) 업무이름, get, post가 올 수 있다.
    console.log('first');
    res.send('hello');
    if(true) return;
    next();
},
(req, res, next) => {
    console.log('first2');
    next();
}); // next는 다음 미들웨어로 호출 할 수 있다.

app.get("/:id", (req, res, next) => {
    console.log('middle1');
    res.send('Hello express!!!!!');
});

const port = 5001;
app.listen(port, () => {
    console.log(`The Express Server is listening at port: ${port}`);
});