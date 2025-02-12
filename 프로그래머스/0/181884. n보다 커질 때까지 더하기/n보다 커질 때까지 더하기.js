function solution(numbers, n) {
    var answer = 0;
    numbers.map((x,i)=>{
        if(answer<=n){
            answer+=x;
        }  
    });
    return answer;
}