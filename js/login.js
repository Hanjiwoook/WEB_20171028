function login(){
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
    let check = document.querySelector("#idSaveCheck");
    let loginFailCount = getCookie("login_fail_count") || 0; // 기존 로그인 실패 횟수를 가져옴
    if (loginFailCount >= 3) {
        alert("로그인이 제한되었습니다. 잠시 후에 다시 시도해주세요.");
        return;
    }
    
    form.action = "../index_login.html";
    form.method = "post"
    
    if(check.checked == true) { // 아이디 체크 o
            alert("쿠키를 저장합니다.");
            setCookie("id", id.value, 1); // 1일 저장
            alert("쿠키 값 :" + id.value);
        } 
    else { // 아이디 체크 x
            setCookie("id", id.value, 0); //날짜를 0 - 쿠키 삭제
    }
    
    if(id.value.length === 0 || password.value.length === 0){
        alert("아이디와 비밀번호를 모두 입력해주세요.");
        return; // 아이디나 비번 비어있으면 함수실행중단
    }
        login_check();
}
    
function closePopup() {
    
    if (document.getElementById('check_popup').value) {
        
        setCookie("id", "N", 1);
        console.log("쿠키를 설정합니다.");
        self.close();
    }
}

function logout(){
    session_del(); //세션 삭제
    location.href='../index.html';
}

function get_id(){
    if (true) {
        decrypt_text();
    }
    else{
            var getParameters = function(paramName){ // 변수 = 함수(이름)
            
            var returnValue; // 리턴값을 위한 변수 선언
            var url = location.href; // 현재 접속 중인 주소 정보 저장
            var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&'); // ?기준 slice 한 후 split 으로 나눔
                
                for(var i = 0; i < parameters.length; i++) { 
		            var varName = parameters[i].split('=')[0];
                    if (varName.toUpperCase() == paramName.toUpperCase()) {
                        returnValue = parameters[i].split('=')[1];
                        return decodeURIComponent(returnValue);
                    // 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
                    }
                } // 2중 for문 끝
            }; // 함수 끝
        alert(getParameters('id') + '님 방갑습니다!'); // 메시지 창 출력
    }
}

function login_check() {
    let id = document.querySelector("#floatingInput").value;
    let password = document.querySelector("#floatingPassword").value;
    
    // 이메일 형식 검사 정규 표현식
    let emailRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/;
    // 패스워드 형식 검사 정규 표현식
    let passwordRegex = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    
    if (!emailRegex.test(id)) {
        alert("이메일 형식이 올바르지 않습니다.");
        return;
    }
    
    if (!passwordRegex.test(password)) {
        alert("패스워드 형식이 올바르지 않습니다.");
        return;
    }
    
    // 이후 로그인 처리 코드를 작성하거나 폼을 서버로 제출하는 등의 동작을 수행
    // ...
}

function login_count() {
    // 기존 쿠키의 카운트 값을 얻어온다.
    let count = parseInt(getCookie("login_cnt")) || 0;
    
    // 카운트 값을 +1 업데이트한다.
    count++;
    
    // 업데이트된 카운트 값을 쿠키에 저장한다.
    setCookie("login_cnt", count, 365);
}

function logout_count() {
    // 기존 쿠키의 카운트 값을 얻어온다.
    let count = parseInt(getCookie("logout_cnt")) || 0;
    
    // 카운트 값을 +1 업데이트한다.
    count++;
    
    // 업데이트된 카운트 값을 쿠키에 저장한다.
    setCookie("logout_cnt", count, 365);
}


function addJavascript(jsname) {
    var th = document.getElementsByTagName('head')[0];
    var s = document.createElement('script');
    s.setAttribute('type','text/javascript');
    s.setAttribute('src',jsname);
    th.appendChild(s);
}
addJavascript('/js/security.js'); //암복호화 함수
addJavascript('/js/session.js'); //세션 함수
addJavascript('/js/cookie.js'); //쿠키 함수
