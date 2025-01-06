function solution(a, b, c, d) {
    const dice = [a,b,c,d].reduce((acc, cur)=>{
       acc[cur]=acc[cur]?acc[cur]+1:1;
        return acc;
    },{});
    
    const diceValue=Object.keys(dice).sort((a,b)=>dice[b]-dice[a]);
    
    if(dice[diceValue[0]]===4){
        return 1111*Number(diceValue[0]);
    } else if(dice[diceValue[0]]===3){
        return Math.pow(10*Number(diceValue[0])+Number(diceValue[1]),2);
    } else if(dice[diceValue[0]]===2&&dice[diceValue[1]]===2){
        return (Number(diceValue[0])+Number(diceValue[1]))*Math.abs(Number(diceValue[0])-Number(diceValue[1]));
    } else if(dice[diceValue[0]]===2){
        return Number(diceValue[1])*Number(diceValue[2]);
    } else{
        return Number(diceValue[0]);
    }
}