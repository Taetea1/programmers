function solution(arr1, arr2) {
    let answer=0;
    if(arr1.length!==arr2.length){
        arr1.length>arr2.length? answer= 1:answer=  -1;
    }else{
        let a=arr1.reduce((acc,cur)=>acc+=cur);
        let b=arr2.reduce((acc,cur)=>acc+=cur);
        if(a!==b){
            if(a===b){
                answer=  0;
            }else if(a>b){
                answer=  1;
            } else{
                answer=  -1;
            }
        }
    }
    return answer;
}