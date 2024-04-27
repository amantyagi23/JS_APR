var n = 1000

// 121 = 121
// 1
// 2
// 3
// .
// .
// 1000

for (var i = 0; i < n; i++) {
    var num = i;
    var result = 0;
    while (num>0) {
        var a = num%10;
        result = result *10+ a;
        num = Math.floor(num/10); 
    }

    if(result == i){
        console.log("Number is ",result);
    }
    
}