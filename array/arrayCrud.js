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

    arr.forEach((value,index,a)=>{console.log(value,index,a);})
}

function updateElement(){

}

function deleteElement(){

}

addElement(1);
addElement(6);
addElement(7);
addElement(5);
addElement(1);
addElement(10);
showArr()
// console.log(arr);