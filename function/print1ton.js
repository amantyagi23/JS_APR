

function printOneToN(n){
    if(n==0){
        return 0;
    }
    if(n%2==0){
        console.log("Even Number",n);
    }
    n = n-1;
    printOneToN(n);
}

printOneToN(10);
