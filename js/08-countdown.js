var input=parseInt(window.prompt("Enter any number"));
if(input<0){
    window.alert("Enter any positive number");
}
while(input!=-1){
    window.document.write(input+"<br>");
    input--;
}