var n = 5;
var a = 1;
for (let row = 0; row < n; row++) {
    var p = "";
   for (let col = 0; col < row +1; col++) {
    p = p + (a) +" "
    a++;
   }
   console.log(p);
    
}