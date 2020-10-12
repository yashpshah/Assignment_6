var coinFlip;
coinFlip=Math.floor(Math.random()*10+1);
var choice=window.prompt("Enter heads or tails").toLowerCase();
var result;
if(coinFlip<=5){
    result="heads";
}else
{
    result="tails";
}
if(choice=="heads" || choice=="tails"){
    if(choice==result){
        window.alert("The flip was "+result+" and you choose "+choice+"...you win!");
    }else{
        window.alert("The flip was "+result+" but you choose "+choice+"...you lose!");
    }
}else{
    window.alert("Enter proper choice heads or tails");
}