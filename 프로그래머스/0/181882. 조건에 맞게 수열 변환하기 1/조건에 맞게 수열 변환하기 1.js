function solution(arr) {
    arr.map((x,i)=>{
        if(x>=50&&x%2===0){
            arr[i]/=2;
        } else if(x<50&&x%2===1){
            arr[i]*=2;
        }
    });
    return arr;
}