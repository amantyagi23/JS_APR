var n = 5;


for (let row = 0; row <n; row++) {
   var p = "";
   for (let space = 0; space < row; space++) {
     p = p + "  ";
    
   }
   for (let col = 0; col < n-row; col++) {
    p = p +"* "
    
   }
   for (let col = 0; col < n-row-1; col++) {
    p = p +"* "
    
   }
   console.log(p);
    
}
