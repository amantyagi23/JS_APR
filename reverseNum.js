var num = 123456;
var rev = 0;

while (num>0) {
    var a = num % 10;
    rev = rev* 10 + a;
    num = Math.floor(num/10); 
}

console.log(rev);