function solution(l, r) {
    var answer = [];
    for(let i=l;i<=r;i++){
        let temp=String(i);
        if([...temp].every(x=>x==='0'||x==='5')){
            answer.push(i);
        }
    }
    return answer.length?answer:[-1];
}