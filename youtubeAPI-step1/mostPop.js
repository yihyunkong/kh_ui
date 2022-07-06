const ajax = new XMLHttpRequest(); // 비동기 통신 객체 - get, post
let content = '';
const MOST_URL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=AIzaSyCmMxUZRAC9Wso1TJDqLYKggqBzP13vJM8&q=백현";
ajax.open("GET", MOST_URL, false); // get 방식
ajax.send();

//console.log(ajax.response);
const result = JSON.parse(ajax.response); /* 객체 보여주기 ! { ... items[{snippet: ... }]} */
const items = result.items; // Array
console.log(items.length);  // 25
content += `<ul class='videos'>`

for(let i=0; i<items.length; i++){
  /* content는 stringBuilder 처럼,, */
  content += `<li class='container'>`
  content += `<div class='video'>`
  content += `<img class='thumbnail' src='${items[i].snippet.thumbnails.medium.url}' alt='이미지'/`;
  content += `<div>`
  content += `<p class='title'>${items[i].snippet.title}</p>`;
  content += `<p class='channel'>${items[i].snippet.channelTitle}</p>`;
  content += `</div>`
  content += `</div>`
}
content += `</li>`
content += `</ul>`
document.querySelector('#root').innerHTML = content;
