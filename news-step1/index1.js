var requestOptions = {
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

const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';


fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions) // fetch 함수는 첫번째 인자로 api, 두번째 인자로 option 받는다.
    // promise 타입의 객체를 반환한다. 반환된 promise로 부터 then 메소드로 응답 받을 수 있다.
    .then(response => response.json())
    .then(result => {
        const ul = document.createElement("ul");
        for(let i=0; i<10; i++){
            const li = document.createElement("li");
            li.innerHTML = result[i].title
            ul.appendChild(li);
        }
        document.getElementById("root").appendChild(ul);
    })
    .catch(error => console.log('error', error));