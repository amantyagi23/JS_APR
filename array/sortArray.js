

let arr = [1,4,5,7,1,8,9,2,0,1];

// console.log(arr);

// arr = arr.sort((a,b)=>b-a);

// console.log(arr);

// selection sort 

for (let i = 0; i < arr.length; i++) {
    
    for (let j = 0; j < arr.length; j++) {
        if(arr[i] < arr[j]){
            let temp = arr[i];
            arr[i] =  arr[j];
            arr[j] =temp;
        }
        
    }
    
}

console.log(arr);