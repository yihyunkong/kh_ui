const ajax = new XMLHttpRequest(); // XMLHttpRequest객체는 서버와 상호작용할 때 사용. 페이지 새로고침 없어도 url에서 데이터를 가지고 올 수 있다.
// 오라클 서버를 경유해서 가져오는 대신에 해커뉴스에서 제공하는 데이터셋을 활용해서
// dom(html요소-활용-> React수업 선수학습)을 조작해 보자
const NEWS_URL = 'http://localhost:8000/dev_web/json/deptToJSON.jsp'; // java ee에서 오라클 연동을 통해 만든 페이지 (상수로 선언해둠)

/* 
  http 메서드 >> get과 post 알아보기 (클라이언트에서 서버로 무언가를 요청할 떄 사용)
    - get : 클라이언트에서 서버로 어떠한 리소스로부터 정보를 요청하기 위해 사용되는 메서드
            게시판의 게시물 조회하기..
            get은 url 주소 끝에 파라미터로 포함되어 전송된다. (쿼리스트링)
            >> url 끝에 '?변수명=값'을 이어 붙인다.

            get을 통해 서버에 리소스를 요청할 때 웹 캐시가 요청을 가로채 서버로부터 리소스를 다시 다운로드하는 대신
            리소스의 복사본을 반환한다. (캐시가 가능하다.)
            브라우저 히스토리에 남는다. 북마크 될 수 있다.
            브라우저마다 길이 제한이 있다.
            파라미터가 노출이 되기 때문에 중요한 정보를 다루면 안된다. (보안)
            데이터를 요청할 때만 사용한다.

    - post :  클라이언트에서 서버로 리소스를 생성하거나 업데이트 하기위해 데이터를 보낼 때 사용되는 메서드
              전송할 데이터를 http 메세지 body 부분에 담아서 서버로 보낸다.
              get에서 파라미터로 보냈던 변수명=값이 body를 통해 보내진다고 생각하면 됨
              길이 제한이 없어서 용량이 큰 데이터를 보낼 때 사용 
              get 처럼 데이터가 url을 통해 드러나는 것이 아니기 때문에 보안성이 좋다.
              (데이터 암호화를 하지 않으면 body에 저장된 데이터도 볼 수 있긴함)
              post는 html form을 통해서 서버로 전송

              캐시되지 않는다. 브라우저 히스토리에 남지 않는다. 북마크 안된다. 길이 제한 없다.
*/

ajax.open('GET', NEWS_URL, false); // get타입으로 서버에 클라에서 서버로 요청하기
ajax.send(); // 전송이 일어난다
// 서버로 부터 응답받은 내용을 출력하기
console.log(ajax.response);
const depts= JSON.parse(ajax.response);
console.log('size : ',depts.length);
const table =document.createElement('table');
table.setAttribute('border','1');
for (let i = 0; i < depts.length; i++) {
  const tr =document.createElement('tr');
  const td1 =document.createElement('td');
  td1.appendChild(document.createTextNode(depts[i].loc));
  const td2 =document.createElement('td');
  td2.appendChild(document.createTextNode(depts[i].dname));
  const td3 =document.createElement('td');
  td3.appendChild(document.createTextNode(depts[i].deptno));
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  table.appendChild(tr);
}
document.getElementById('root').appendChild(table);