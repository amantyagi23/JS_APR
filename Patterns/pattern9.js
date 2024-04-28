var n =5;

for (let row = 0; row < n; row++) {
    var p =""
    for (let col = 0; col < row+1; col++) {
        p = p + (row-col+1);
    }
    console.log(p);
}