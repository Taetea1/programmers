function solution(a, b) {
    var answer = 0;
    let num1=String(a)+String(b);
    let num2=2*a*b;
    
    num1>=num2?answer=Number(num1):answer=num2
    
    return answer;
}