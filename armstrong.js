var num = 153;

var num2 = num;
var res = 0;

while(num >0 ){
    var a = num%10
    var cube = a*a*a;
    res = res + cube;
    num =  Math.floor(num/10);
}

console.log("Result",res,"Number",num2);
if(num2 == res){
    console.log("number is armstrong");
}
else{
    console.log("Not a armstrong ");
}