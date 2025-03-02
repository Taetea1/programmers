function solution(num, k) {
    let answer=String(num).split('');
    return answer.includes(String(k))?answer.indexOf(String(k))+1:-1;
}