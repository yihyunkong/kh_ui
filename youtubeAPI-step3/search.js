function handleEnter(){
  if(event.keyCode === 13) { // 키를 눌렀을 때 - 13번이면 enter에 대한 코드값
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
    
  }
  videoList.push(`</ul>`);
  document.querySelector('#root').innerHTML = videoList.join("");
} ////////////////////////////////// end of searchList

/* document.getElementById("buttonImg").addEventListener('click', searchList);
function searchList(){
  alert("검색기능");
}; */