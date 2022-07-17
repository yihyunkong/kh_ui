///// 추가 버튼 이벤트 처리
const btn_add = document.querySelector(".btn_add");
btn_add.addEventListener('click', (e) => {
    const footer_input = document.querySelector(".footer_input");
    const text = footer_input.value.trim();

    if (text !== '') {
        addToList(text);
        footer_input.value = '';
    }
});

/*
    // 요 태그가 function에 들어가서 추가 될 수 있도록 한다.
    <div class="item">
        <span class="item_name">스피닝</span>
            <button class="btn_delete">
                <i class="fas fa-trash-alt"></i> <!-- 휴지통 이미지 추가 -->
            </button>
    </div>
    <div class="item_divider"></div>
*/
function addToList(text) {
    // 어디에 추가될거야? li (클래스명 item)
    const item = document.querySelector(".item");
    // 뭐가 추가될거야? span (클래스명 item_name)
    const item_name = document.querySelector(".item_name");
    // 삭제 버튼도 같이 추가해줄거야
    const btn_delete = document.querySelector(".btn_delete");
    // 밑줄도 추기헤줄거야
    const item_divider = document.querySelector(".item_diviber");

    // 새로운 항목이 어디에 추가될건지 ? >> li에 (item)
    item_name.classList.add('item_name');
    item_name.classList.add('btn_delete');
    item_name.classList.add('btn_delete');
    item_name.classList.add('item_diviber');

    // footer_input에 입력된 text를 li에 넣기 
    item_name.innerHTML = text;

    // 리스트에 새로 만든 li 추가
    item.appendChild(item_name);
};

///// 삭제 버튼 이벤트 처리
const btn_delete = document.querySelector(".btn_delete");
btn_delete.addEventListener('click', (e) => {
    console.log("삭제 클릭");
    if(!confirm("항목을 삭제하시겠습니까?")) {

    } else {
        alert("삭제되었습니다.");
    }
});