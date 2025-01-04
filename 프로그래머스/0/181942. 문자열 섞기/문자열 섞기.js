function solution(str1, str2) {
    var answer = '';
    let s1=[...str1];
    let s2=[...str2];
    for(let i=0;i<str1.length;i++){
        answer+=s1[i]+s2[i];
    }
    return answer;
}