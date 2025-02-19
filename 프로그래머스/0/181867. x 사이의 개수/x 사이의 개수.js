function solution(myString) {
    var answer = [];
    myString.split('x').map((x)=>{
        answer.push(x.length);
    })
    return answer;
}