

var even = [];
var odd = [];

for (let i = 1; i <= 100; i++) {
    if(i%2==0){
        even.push(i);
    }
    else{
        odd.push(i)
    }
    
}

console.log(even.length); 
console.log(odd.length); 