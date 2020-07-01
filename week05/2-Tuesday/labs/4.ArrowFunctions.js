// ***Write these functions with  Arrow Functions

function mult(a, b) {
    return a * b;
}

var mult = (a, b) => a * b;

console.log(mult(4, 7));


setTimeout(function () {
    console.log(mult(5, 10));
}, 1000)

setTimeout = (() => console.log(mult(5, 10)), 1000);


function test(){
  
  console.log(this);
}