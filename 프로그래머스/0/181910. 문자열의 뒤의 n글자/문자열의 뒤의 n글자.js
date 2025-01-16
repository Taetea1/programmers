function solution(my_string, n) {
    var answer = '';
    let len=my_string.length;
    for(let i=len-n;i<len;i++){
        answer+=my_string[i];
    }
    return answer;
}