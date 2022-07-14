const a = document.querySelector("a"); 
// a 태그 한가지만 선택할 떄 querySelector ! (a 태그 전체 선택할 때 querySelectorAll / 아이디나 클래스명을 따로 주지 않았음)
//console.log(a);
//console.dir(a); // DOM의 구조를 보여준다.

// arrow function
// >> a 태그를 온 클릭 했을 때 실행된다.

// 이벤트 핸들러는 event 객체 주입이 안된다.
// 그러니까 사용할 수 없다.
// 그러니가 이렇게 이벤트 처리하면 우울해짐..
a.onclick = (event) => {
    event.preventDefault();
    console.log("네이버 클릭");
}

// 다른 개발자가 실수로 이벤트를 또 주면 이벤트가 덮어진다.
a.onclick = () => {
    console.log("네이버 다시 클릭");
}

// 이벤트 처리는 무조건 addEventListener !!!!!
a.addEventListener('click', () => {
    console.log("2 네이버 클릭");
})

a.addEventListener('click', () => {
    console.log("2 네이버 다시 클릭");
})

