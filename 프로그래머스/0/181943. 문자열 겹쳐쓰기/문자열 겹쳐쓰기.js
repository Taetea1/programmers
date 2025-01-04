function solution(my_string, overwrite_string, s) {
     let answer = [...my_string];//배열을 문자열로 변환
    answer.splice(s,overwrite_string.length,overwrite_string);
    return answer.join('');
}