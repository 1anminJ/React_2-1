// 오늘 날짜 정보를 Date 객체의 인스턴스 now 객체로 만든다.
var now = new Date();
// 처음 만난 날의 날짜 정보를 firstDay라는 객체로 만든다. 
var firstDay = new Date("2004-01-03");
// 두 날짜를 밀리초로 바꾼다.
var toNow = now.getTime();
var toFirst = firstDay.getTime();
// 처음 만난 날과 오늘 사이의 차이(밀리초)
var passedTime = toNow - toFirst;
// 밀리초를 일로 변환 후 반올림
var passedDay = Math.round(passedTime/(24 * 60 * 60 * 1000));
document.querySelector('#accent').innerText = passedDay + "일";

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days){
    var future = toFirst + days * (1000 * 60 * 60 * 24);
    var someday = new Date(future);
    // 연도
    var year = someday.getFullYear();
    // 월
    var month = someday.getMonth() + 1;
    // 일
    var date = someday.getDate();
    document.querySelector("#date" + days).innerText = year + "년 " + month + "월 " + date + "일";
}