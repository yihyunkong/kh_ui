const ajax = new XMLHttpRequest();
const MOST_URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBEcdJHAIGdk3Pb3o2egkCHCC4ViGuZAgU";
ajax.open("GET", MOST_URL, false);
ajax.send();

console.log(ajax.response);