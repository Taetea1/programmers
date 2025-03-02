function solution(arr, n) {
    var answer = [];
    arr.map((x,i)=>{
        if(arr.length%2!==0){
            if(i%2===0) arr[i]+=n;
        } else{
            if(i%2!==0) arr[i]+=n;
        }
    })
    return arr;
}