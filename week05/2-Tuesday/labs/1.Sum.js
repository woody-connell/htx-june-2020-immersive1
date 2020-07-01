// Create a function sum() that will sum all arguments passed to it.
// Quantity of the arguments is unknown.

sum(1,3);
sum(10, 20, 5);

function sum(){
  
}

let sum = (...args) => {
  let sum = 0;
  for(arg of args){
    sum += arg
  }
  return sum;
}

//another solution
let sum = (...args) => {
  let sum = 0;

  sum = args.reduce(acc, elem) => acc + elem, 0);
  return sum;

}
