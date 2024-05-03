var n = 5;

for (let row = 0; row < n; row++) {
    var  p = ""
    for (let col = n-row; col >0; col--) {
         p = p +col;
    }
    console.log(p);
}