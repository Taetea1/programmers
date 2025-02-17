function solution(strArr) {
    var answer = [];
    strArr.map((x,i)=>{
        if(i%2===0){
            answer.push(x.toLowerCase());
        }else{
            answer.push(x.toUpperCase());
        }
    })
    return answer;
}