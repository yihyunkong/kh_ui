const a = document.querySelector("a"); 

a.addEventListener('click', (event) => {
    //sevent.preventDefault(); // preventDefault를 누르면 src나 href에 걸린 링크로 이동하지 않는다.
    // 파라미터로 이벤트 객체가 주입이 되었다.
    console.log("2 네이버 클릭");
});

const box = document.querySelector(".box"); // div 태그의 class명 .box에 접근
box.addEventListener('mousemove', (event) => {
    console.log(event);
    // X축과 Y축의 위치
    console.log(`${event.pageX}`);
    console.log(`${event.pageY}`);
    console.log(`${event.offsetX}`); // 박스 안에서의 축
    console.log(`${event.offsetY}`);
});