const readline=require('readline')
const inp=readline.createInterface({
input:process.stdin,
output:process.stdout
})
var userInput;
inp.on('line', (data)=>{
    userInput=Number(data);

})
function cToF(a)
{
    console.log((((9/5)*(a))+32).toFixed(2))
}
inp.on('close',()=>{
    cToF(userInput)
})
