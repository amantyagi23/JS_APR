// CRUD

// C- create, R-read, U-update, D-delete 

// array 


var arr = [];


// create element



function addElement(value){
    arr.push(value);
}

function showArr(){
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
        
    // }

    arr.forEach((value)=>{console.log(value);})
}

function search(value){
   let result =  arr.findIndex((element)=>element==value);
   console.log("result",result);
}

function updateElement(index,value){
    arr[index] = value;
}

function deleteElement(value){

   arr =  arr.filter((ele)=>ele!=value);
}

addElement(1);
addElement(6);
addElement(7);
addElement(5);
addElement(1);
addElement(10);
showArr()
// console.log(arr);
updateElement(3,18);
// search(7)
console.log("Update array");
showArr()
deleteElement(18);
console.log("after delete ");
showArr();