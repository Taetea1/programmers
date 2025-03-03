function solution(babbling) {
    var answer = 0;
    const word=["aya", "ye", "woo", "ma"];
    
    babbling.map((x)=>{
        let temp=x;
        word.map((y)=>{
            if(temp.includes(y)){
                temp=temp.replace(y,"X");
            }
        })
        temp=temp.replace(/X/gi, "");
        if(temp.length===0){
            answer++;
        }
    })
    return answer;
}