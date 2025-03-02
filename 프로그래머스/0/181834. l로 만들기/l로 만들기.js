function solution(myString) {
    let answer=[...myString]
    answer.map((x,i)=>{
        if(x.charCodeAt() < 108){
            answer[i]="l"
        }
    })
    return answer.join('');
}