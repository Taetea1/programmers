function solution(array) {
    var answer = "";
    let count=0;
    array.map((x)=>{
        answer=x.toString().split('7');
        count += answer.length-1;
    })
    return count;
}