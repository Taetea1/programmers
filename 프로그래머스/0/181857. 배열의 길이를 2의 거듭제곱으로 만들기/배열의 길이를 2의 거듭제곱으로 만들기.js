function solution(arr) {
    let count=0;
    while(arr.length>2**count){
        count++;
    }
    
    while(arr.length!==2**count){
        arr.push(0)
    }
    
    return arr;
}