var n = 5;

for (let row = 0; row < n; row++) {
    var p = "";
    for (let col = 0; col < n; col++) {
        if (row == 0 || row == n - 1 || col == 0 || col == n - 1) {
            p = p + "* ";
        } else if ((parseInt(row / 2) == parseInt(n / 2)) && (parseInt(col / 2) == parseInt(n / 2))) {
            p = p + "* ";
        } else {
            p = p + "  ";
        }
    }
    console.log(p);
}
