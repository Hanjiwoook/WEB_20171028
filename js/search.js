document.getElementById("search_btn").addEventListener('click', search_message);

function search_message(){
   alert("검색을 수행합니다!"); 
    let search_str = document.querySelector("#search_txt"); // 변수에 저장
    if(search_str.value.length === 0){ // 문자 길이, 엄격한 비교
        alert("검색어가 비었습니다. 입력해주세요");
        return; // 검색어가 비어있으면 검색을 중단
    }
    if (!no_str(search_str.value)) { //욕설 필터링
        return; //욕설이 포함되어 있으면 검색중단
    }
        alert("검색을 수행합니다!");
    document.getElementById("search_message").innerHTML = search_str.value;
    document.querySelector("#form_main").submit();
    console.log(search_str.value);
}


function no_str(str) {
    const forbiddenWords = ["씨발", "개새끼", "병신"]; // 필터링할 욕설 단어들의 배열

    for (let i = 0; i < forbiddenWords.length; i++) {
        if (str.includes(forbiddenWords[i])) { // 욕설 단어가 포함되어 있는지 확인
            alert(`'${forbiddenWords[i]}'는 적절하지 않습니다.`); // 적절하지 않은 메시지 출력
            return false; // 욕설이 포함되어 있으면 false를 반환하여 검색을 중단
        }
    }

    return true; // 욕설이 없으면 true를 반환하여 검색을 진행
}
