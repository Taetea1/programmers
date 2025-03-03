function solution(num, total) {
    var answer = [];
    let center=Math.floor(total/num);
    let n=Math.floor(num/2);
    if(num%2===0){
        for(let i=center-n+1;i<=center+n;i++){
            answer.push(i);
        }
    } else{
        for(let i=center-n;i<=center+n;i++){
        answer.push(i);
        }
    }
    
    
    return answer;
}