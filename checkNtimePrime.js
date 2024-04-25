var n = 100;

function checkPrime(num){
    var flag = 0; 
    for (let i = 2; i < num; i++) {
        if(num%i==0){ 
            flag= 1;
        }
    }
    if(flag == 0){ 
        console.log("Prime Number",num);
    }
    else{
        console.log("Not a Prime Number",num);
    }
}

function checkReverse(num){
    // reverse
}

for (var num = 100; num <= 1000; num++) {
//    checkPrime(num);
checkReverse(num)
}

