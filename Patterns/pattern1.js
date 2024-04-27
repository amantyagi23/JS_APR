var n = 5;

// for (let row = 0; row < n; row++) {
//    console.log("* ");
// }

// *
// *
// *
// *
// *'

for (let row = 0; row < n; row++) {
    var p = ""
   for (let col = 0; col < n; col++) {
    p = p +"* "
   }
   console.log(p);
}