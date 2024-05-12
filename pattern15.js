var n = 5;

for (let row = 0; row < n; row++) {
    var p = "";
    for (let col = 0; col < n; col++) {
        if (row == 0 || row == n - 1 || col == 0 || col == n - 1) {
            p = p + "* ";
        } else if (row == Math.floor(n/2) && col == Math.floor(n/2)) {
            p = p + "* ";
        } else {
            p = p + "  ";
        }
    }
    console.log(p);
}
