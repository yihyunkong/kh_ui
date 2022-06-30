function dongInput(){ // dongInput 함수
  let dong = prompt('동 이름을 입력하세요.'); // dong이라는 변수명 저장
  if(dong === null || dong.length === 0){ // 동 이름을 입력하지 않았을 때
    alert("동 이름을 입력하세요.");
    return; // 그대로 진행되면 안되니까 다시 동 이름 입력 문구 출력
  } else { // 동 이름이 입력되었으면 
    action(dong); // action이라는 함수가 진행
  }
}

// 사용자가 선택한 정보를 텍스트필드에 자동출력하기 
function choice(zipcode, address){ // choice 함수 (찾은 값을 선택했을 때, 선택한 값이 input창에 떠야함 (zipcode와 address가 떠야해!)
  document.querySelector('#zipcode').value = zipcode; // class="zipcode" >> 사용할 때 #zicode
  document.querySelector('#address').value = address; // calss="address" >> 사용할 떄 #address
  // 값이 선택되면 조회 결과 화면 지워주세요.
  // insert here
  document.getElementById("root").innerHTML = "";
  
}

function action(dong){  // action 함수
  document.getElementById("root").innerHTML = ""; // 다시 입력해도 새로운 조건만 나오게 된다.
  console.log('사용자가 입력한 동 이름 : ' + dong); // 동 이름이 입력되면 action 함수가 진행 -> console 출력
  // 동 정보를 입력받고 처리를 해야한다.
  const ajax = new XMLHttpRequest(); 
  const ZIPCODE_URL = 'http://localhost:8000/dev_web/json/jsonZipcodeList.jsp?dong=' + dong;
  ajax.open('GET', ZIPCODE_URL, false); // get타입으로 서버에 클라에서 서버로 요청하기
  ajax.send(); // 전송이 일어난다
  const address = JSON.parse(ajax.response);
  const table =document.createElement('table');
  table.setAttribute('border', '1');
  table.setAttribute('width', '400');
  const htr = document.createElement('tr');
  const th1 = document.createElement('th');
  th1.appendChild(document.createTextNode('우편번호'));
  const th2 = document.createElement('th');
  th2.appendChild(document.createTextNode('주소'));
  htr.appendChild(th1);
  htr.appendChild(th2);
  table.appendChild(htr);
  for (let i = 0; i < address.length; i++) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const a = document.createElement('a');
    a.href = "javascript:choice('"+ address[i].zipcode + "', '" + address[i].address +"')";
    td.setAttribute('width','90');
    a.appendChild(document.createTextNode(`${address[i].zipcode}`));
    td.appendChild(a);
    const td2 = document.createElement('td');
    td2.appendChild(document.createTextNode(`${address[i].address}`));
    tr.appendChild(td);
    tr.appendChild(td2);
    table.appendChild(tr);
  }
  document.getElementById('root').appendChild(table);
}