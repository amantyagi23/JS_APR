

var arr = [1,5,3,7,19,41,3,0,21];

var max = arr[0];

arr.forEach((ele)=>{
    if(max<ele){
        max = ele;
    }
})

console.log(max);


// var result = arr.sort((a,b)=>);

// console.log(result);