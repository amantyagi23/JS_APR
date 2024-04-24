var num = 752;

var count = 0;

while(num!==0){
     count = count + 1;
     console.log("count",count,"Num",num);
     num = Math.floor(num/10); // to remove "." values
    // num = num/10;
}

// 752       // 342/10 => 34/10 => 3/10 => 0 
// 75        // 752/10 => 75/10 => 7/10 => 0
// 7         // 2365891/10 => 236589.1/10 => 23658.91/10 => 2365.891/10 => 236.5891/10 =>
//              23.65891/10 => 2.365891/10 =>  0.2365891
// 0

console.log(count);