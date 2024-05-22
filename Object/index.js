var a = "operator"
// + - = operations

// object 



// key or value 
var object = {
    name :"Aman",
    age:18,
    branch : "cse",
    adult:false,
    arr :[],
    add:function(a,b){ return a+b}
}

for (const key in object) {
   console.log(key,object[key]);
}


var arr = [object,object]

for (const iterator of arr) {
    console.log(iterator);
}
