// 덧셈 연산을 실행하는 함수
function addNumber(a, b){
    // var sum = 10 + 20;
    // alert(sum);
    var sum = a + b;
    return sum;
}

// 입력 받아 덧셈 연산
var num1 = parseInt(prompt("첫번째 숫자 : "));
var num2 = parseInt(prompt("두번째 숫자 : "));
var result = addNumber(num1, num2);
alert("두 수를 더한 값은 " + result + "입니다.");

