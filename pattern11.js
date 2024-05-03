
var n = 5;
for (let row = 0; row < n; row++) {
    var p = ""
    for (let space = 0; space < n-row -1 ; space++) {
        p = p + "  "
    }
    for (let star = 0; star < row +1; star++) {
         
         if((star+1)%2==0){
            p = p + "* "
         }else{
            p = p + (star+1)+" "
         }
    }
    for (let star = 0; star < row; star++) {
        if((row-star)%2==0){
            p = p + "* "
         }else{
            p = p + (row-star)+" "
         } 
    }
    console.log(p);
    
}