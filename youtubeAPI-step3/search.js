function handleEnter(){
  alert(event.keyCode)
  if(event.keyCode === 13) {
    console.log('엔터 쳤을 때') // 키를 눌렀을 때 - 13번이면 enter에 대한 코드값
    searchList();
  }
}

function searchList(){
  const query = document.querySelector('.input').value;
  console.log('사용자가 입력한 검색어 : ' + query);
  const ajax = new XMLHttpRequest();
  const SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=AIzaSyCmMxUZRAC9Wso1TJDqLYKggqBzP13vJM8&q=${query}`;
  ajax.open("GET", SEARCH_URL, false);
  ajax.send();
  const videoList = [];
  console.log(ajax.response);
  const result = JSON.parse(ajax.response);// { ... items:[{snippet:...}]}
  const items = result.items;// Array
  console.log(items.length);//25
  videoList.push(`<ul class='videos'>`);
  for(let i=0;i<items.length;i++){
    videoList.push(`<li class='container'>`);
    videoList.push(`<div class='video'>`);
    videoList.push(`<img class='thumbnail' src='${items[i].snippet.thumbnails.medium.url}' alt='이미지'/`);
    videoList.push(`<div>`);
    videoList.push(`<p class='title'>${items[i].snippet.title}</p>`);
    videoList.push(`<p class='channel'>${items[i].snippet.channelTitle}</p>`);
    videoList.push(`</div>`);
    videoList.push(`</div>`);
  }
  videoList.push(`</ul>`);
  document.querySelector('#root').innerHTML = videoList.join("");
} ////////////////////////////////// end of searchList

/* document.getElementById("buttonImg").addEventListener('click', searchList);
function searchList(){
  alert("검색기능");
}; */