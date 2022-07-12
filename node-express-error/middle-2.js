const express = require('express');
const app = express(); // 객체 생성 - heap 영역에 쌓인다. 함수는 stack 메모리에 >> (heap, stack memory[함수의 호출 순서대로 first in last out])

app.get("/", (req, res, next) => { // get의 자리에는 all, (use) 업무이름, get, post가 올 수 있다.
    console.log('first');
    next(new Error("error")); // 강제로 에러 발생하게 처리 >> 에러를 던진다. 사용자에게 에러 결과가 그대로 출력되는 건 좋지 않다.
    // 반드시 마지막 체인에서 에러 처리하는 코드를 추가해야한다.
},
(req, res, next) => {
    console.log('first2');
    next();
}); // next는 다음 미들웨어로 호출 할 수 있다.

app.use((req, res, next) => {
    // 테스트 시나리오 - http://localhost:5001/6 와 같은 url로 요청하면 아래 메세지가 화면에 출력이 되도록
    res.status(404).send("해당 url은 존재하지 않습니다."); // status는 응답 객체 
    next();
});

app.get("/:id", (req, res, next) => {
    console.log('middle1');
    res.send('Hello express!!!!!');
});

// 에러처리 핸들러 코드 추가하기
// 만일 이것을 안하게 되면 사용자에게 에러 메세지가 그대로 노출된다.
// 이것은 해커에게는 아주 유용한 힌트를 제공하는 것이다. - 보안성이 좋지 않다.
app.use((error, req, res, next) => {
    console.log(error);
    // 500번 서버 에러를 강제하는 코드이다.
    res.status(500).send("서버 관리자에게 문의 바랍니다.");
})

const port = 5001;
app.listen(port, () => {
    console.log(`The Express Server is listening at port: ${port}`);
});