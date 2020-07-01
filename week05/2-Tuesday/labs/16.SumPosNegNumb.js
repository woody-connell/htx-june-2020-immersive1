
/*
Create a function sumPlusMinus() that takes an array and sums 
separately positive and negative numbers

it should return an object like this:

{
    plus: 74, // sum of all positive numbers
    minus: -54 // sum of all negative numbers
}

*/


var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// // Write code here
// var sumPlusMinus = function(...args){
//   let i = 0;
//   var pos = 0;
//   var neg = 0;
//   for (arg in args){
//     if (i > 0){
//       pos += arg;
//     }
//     else{
//       neg += arg;
//     }

//   }
//   return(pos, neg);
// }



//Veronica's answer

let sumPlusMinus = arr => {
  
  return(arr.reduce((acc, elem)=>{
    return {
      plus: elem > 0 ? acc.plus + elem : acc.plus,
      minus: elem < 0 ? acc.minus + elem : acc.minus
    }
  }, {plus: 0, minus: 0})
}

console.log(sumPlusMinus(nums));
// {plus: 74, minus: -54}