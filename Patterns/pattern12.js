var n = 5;
// n -row
// * * * * *
// * * * *
// * * *
// * *
// *

for (let row = 0; row < n; row++) {
    var star = ""; 
   for (let col = 0; col < n-row; col++) {
    star = star + "* ";
   }
   console.log(star);
    
}