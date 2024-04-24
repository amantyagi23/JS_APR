var num = 32;

var flag = 0; /// global scope

for (let i = 2; i < num; i++) {
    if(num%i==0){ // block scope
        flag= 1;
    }
}

if(flag == 0){ // global
    console.log("Prime Number");
}else{
    console.log("Not A Prime Number");
}