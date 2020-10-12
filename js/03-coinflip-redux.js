var coinFlip;
for(var index=1;index<=10;index++){
    coinFlip=Math.round(Math.random());
    if(coinFlip==0){
        window.console.log("Heads");
    }else{
        window.console.log("Tails\n");
    }
}