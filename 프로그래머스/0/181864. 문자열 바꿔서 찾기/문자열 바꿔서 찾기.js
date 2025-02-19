function solution(myString, pat) {
    let answer=[...myString]
    for(let i=0;i<answer.length;i++){
        answer[i]==='A'?answer[i]='B':answer[i]='A';
    }
    return answer.join('').includes(pat)?1:0;
}