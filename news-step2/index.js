const content = document.createElement('div'); // div 태그를 만들어서 상세보기가 가능하다? 
// appendChiled를 사용하면 목록 화면에서 내용화면으로 진입했을 때 목록이 유지되는 이유는?
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
/*
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
*/

fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        const ul = document.createElement("ul");
        for(let i=0; i<10; i++){
            const div = document.createElement("div");
            div.innerHTML = ` // 문자열로 dom을 만들어주자 ! innerHTML
            <li>
                <a href='#${result[i].id}'>
                    ${result[i].title}(${result[i].comments_count});
                </a>
            </li>
            `;
            ul.appendChild(div.firstElementChild);
            document.getElementById("root").appendChild(ul);
            //document.getElementById("root").appendChild(ul);
        }
        document.getElementById("root").appendChild(ul); // 
        document.getElementById("root").appendChild(content); //
    })
    .catch(error => console.log('error', error));

    const requestOptions2 = {
        method: 'GET',
        redirect: 'follow'
    };

    window.addEventListener("hashchange", () => {
        console.log(location.hash);
        const id = this.location.hash.substring(1); // #31914288 (해쉬값 #) 에서 첫번째 자리 #은 잘라내고 사용한다.
        fetch("https://api.hnpwa.com/v0/item/@id.json".replace("@id", id), requestOptions2)
        .then(response => response.json())
        // callback으로 then과 then이 연결된다.
        //.then(result => console.log(result))
        .then(result => {
            const title = this.document.createElement("h1");
            title.innerHTML = result.title;
            content.appendChild(title);
        })
        .catch(error => console.log('error', error));
    });

    // 라우터에서 화면 전환을 구현해본다. 
    // 뉴스 내용 보기를 화면 전환을 통해 재구성해본다. 
    // 조건에 따라 화면 전환이 일어나야 하므로 조건문의 함수 호출을 통해서 이 문제를 해결해본다.
    // 무엇으로 기준할 것인가?
    /*
        글 목록의 링크는 #이었음(해쉬값) 그러면 location.hash에 #이 들어왔음
        그러면 이것으로 어떤 참 거짓을 나눌 수 있지? 0이면 false 나머지는 모두 true
        location.hash에 #만 들어오면 빈 값을 반환한다. ""
        첫 진입일 때는 getNewsList를 호출하고
        해시값이 존재하면 getNewsContent를 호출한다.
    */
    function router() {
        //console.log(location.hash); // #3214567
        const hashValue = location.hash;
        // 첫 진입이면 ?
        if(hashValue === "") {
            getNewsList();
        } else { // hash 값이 존재하면
            getNewsContent();
        }
    } //////// end of router

    window.addEventListener("hashchange", router); // 이벤트 핸들러 매핑 
    router();

    // 페이지의 특성 : 변한다.... 현재 페이지가 몇번째 페이지인지 기억하는 변수가 필요하다. 상수가 아닌 변수 ! (페이지의 위치값이 바뀔거니까)
    // 페이지 정보는 언제 어디서 사용될까? 