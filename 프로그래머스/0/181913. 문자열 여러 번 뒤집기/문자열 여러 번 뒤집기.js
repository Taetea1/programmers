function solution(my_string, queries) {
    let answer = [];
    let reverslice='';
    queries.forEach(([s,e])=>{
        answer=[...my_string];
        reverslice = answer.slice(s, e+1).reverse().join('');
        answer.splice(s,e-s+1,reverslice);
        my_string=answer.join('');
        
    })
    return my_string;
}