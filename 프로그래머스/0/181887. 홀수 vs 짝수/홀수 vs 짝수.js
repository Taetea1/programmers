function solution(num_list) {
    var answer = 0;
    let odd=0;
    let even=0;
    num_list.map((x,i)=>{
        if((i+1)%2===0){
            even+=x;
        } else{
            odd+=x;
        }
    })
    even>odd?answer=even:answer=odd;
    return answer;
}