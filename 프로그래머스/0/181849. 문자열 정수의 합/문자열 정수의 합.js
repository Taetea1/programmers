function solution(num_str) {
    let answer=num_str.split('');
    let sum=0;
    answer.map((x)=>{
        sum+=Number(x);
    })
    return sum;
}