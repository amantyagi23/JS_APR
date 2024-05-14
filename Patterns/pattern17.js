var n =9;

for (let row = 0; row < n; row++) {
    var  p=""
    for (let col = 0; col < row+1; col++) {
        p = p+ (n-col) +" "
        
    }
    for (let col = 0; col < n-row -1; col++) {
        p = p+ (n-row) +" "
    }

    for (let col = 0; col < n-row -1; col++) {
        p = p+ (n-row) +" "
    }
    for (let col = row; col >0 ; col--) {
        p = p+ (n-col+1)+" "
    }
    console.log(p);
    
}


for (let row = 1; row < n; row++) {
    var  p=""
    for (let col = 1; col < n-row+1; col++) {
        p = p+ (n-col+1) +" "
        
    }
    for (let col = 0; col < row ; col++) {
        p = p+ (row+1) +" "
    }
    for (let col = 0; col < row; col++) {
        p = p+ (row+1) +" "
    }
    for (let col = n-row-1; col >0; col--) {
        p = p+ (n-col+1) +" "
        
    }
    
    console.log(p);
    
}