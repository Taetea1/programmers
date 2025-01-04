function solution(n) {
    var answer = 0;
    if(n%2===1){
        for(let i=1;i<=n;i++){
            if(i%2===0){
                continue;
            }
            answer+=i;
        }
    } else{
        for(let i=1;i<=n;i++){
            if(i%2===1){
                continue;
            }
            answer+=i**2;
        }
    }
    return answer;
}