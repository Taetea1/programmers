function solution(myString, pat) {
    var answer = 0;
    let a = myString.toLowerCase();
    let b=pat.toLowerCase();
    a.includes(b)? answer=1:answer=0;
    return answer;
}