
var count = 0;

function countDigit(num){

  
    if(num==0){
        return count;
    }
    count = count+1;
   
    num =  Math.floor(num/10);
    console.log("count is",count,"num is",num);
   return countDigit(num);
}

var result = countDigit(123456);

console.log(result);
