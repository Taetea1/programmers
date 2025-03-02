function solution(strArr) {
    var answer = 0;
    let count=new Array(strArr.length).fill(0);
    strArr.map((x)=>{
        count[x.length]++;
    })
    return Math.max(...count);
}