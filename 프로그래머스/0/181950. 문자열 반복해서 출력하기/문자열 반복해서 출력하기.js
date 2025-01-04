const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let strstr=''
const repeatStr =(str,n)=>{
    for(let i=0;i<n;i++){
        strstr+=str;
    }
    console.log(strstr);
}
rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    repeatStr(str,n);
});