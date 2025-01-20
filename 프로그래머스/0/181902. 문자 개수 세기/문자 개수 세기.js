function solution(my_string) {
    let alpha='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let len=[];
    len.length=52;
    len.fill(0);
    my_string.split("").map((n)=>{
        len[alpha.indexOf(n)]+=1;
    })
    return len;
}