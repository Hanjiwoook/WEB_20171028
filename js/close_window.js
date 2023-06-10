var close_time;         // 시간정보
var close_time2 = 10;   // 10초 설정

clearTimeout(close_time); // 재호출 정지
close_time = setTimeout("close_window()", 10000); // 1/1000초 지정, 바로 시작
show_time();            // 실시간 시간 보여주기

function show_time() {
    let divClock = document.getElementById('Time');
    let timeString = close_time2.toString(); // 숫자를 문자열로 변환
    divClock.innerText = "남은 시간은 " + timeString + "초 입니다."; // 문자열 추가해서 출력
    close_time2--; // 1초씩 감소
    setTimeout(show_time, 1000); // 1초마다 갱신

}

function close_window() { //함수 정의
    window.close(); //윈도우 닫기
}

window.onload=show_clock;