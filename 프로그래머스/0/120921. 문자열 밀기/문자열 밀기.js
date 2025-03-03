function solution(A, B) {
    var answer = -1;
    let a=[...A];
    for(let i=0;i<a.length;i++){
        if(A===B){
            return i;
        } else{
            
        }
        a.unshift(a.pop());
        if(a.join('')===B){
            return i+1;
        }
    }
    return answer;
}