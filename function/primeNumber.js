



function checkPrimeNumber(num){
    for (let i = 2; i < num; i++) {
        if(num % i==0){
            return false;
        }
    }
    return true;
}
checkPrimeNumber(23)?console.log("Prime Number"):console.log("Not A Prime Number");