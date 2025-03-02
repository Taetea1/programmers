function solution(arr, k) {
    if(k%2!==0){
        arr.map((x,i)=>{
            arr[i]*=k;
        })
    }else{
        arr.map((x,i)=>{
            arr[i]+=k;
        })
    }
    return arr;
}