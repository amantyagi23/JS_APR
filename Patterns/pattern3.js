var n = 5;

for (let row = 0; row < n; row++) {
    var p = "";
    for (let col = 0; col < n; col++) {
        if((col+1)%2==0){
            p = p + "* " 
        }
        else{
            p = p + (col+1)+" "
        }
    }
    console.log(p);
    
}