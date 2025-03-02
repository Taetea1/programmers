function solution(arr) {
    let count=0;
    while(arr.length>2**count){
        count++;
    }
    
    return [...arr, ...new Array(2**count-arr.length).fill(0)];
}