function solution(a, b) {
    a=String(a);
    b=String(b);
    var answer = 0;
    a+b>b+a? answer=Number(a+b):answer=Number(b+a);
        
    return answer;
}