function solution(arr, k) {
    let answer=[];
    arr.map((x,i)=>{
       if(answer.length===k) return answer;
        if(!answer.includes(x)) answer.push(arr[i]);
    });
    
    while(answer.length<k){
        answer.push(-1);
        
    }
    return answer;
}