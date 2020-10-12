var number1,number2;
number1=parseInt(window.prompt("Enter first number"));
number2=parseInt(window.prompt("Enter second number"));
if(number1>number2){
    window.document.write("Largest number is:"+number1);
}else if(number1<number2){
    window.document.write("Largest number is:"+number2);
}else{
    window.document.write("Both numbers entered are equal");
}