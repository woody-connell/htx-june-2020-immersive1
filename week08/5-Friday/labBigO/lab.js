var hotels = [
  {price: 200, brand: 'Estin'},
  {price: 50, brand: 'Best Western'},
  {price: 50, brand: 'Best Western'},
  {price: 250, brand: 'Best Western'},
  {price: 500, brand: 'Best Western'},
  {price: 1500, brand: 'Best Western'},
  {price: 175, brand: 'Radishin'}
]

let min = hotels[0].price;
let max = hotels[0].price;


for (let i = 0; i < hotels.length; i++){
  for (let j = 0; j < hotels.length; j++){
    // Finding the max
    if(hotels[i].price > hotels[j].price && hotels[i].price > max){
      max = hotels[i].price;
    }
  }
}


// this code is jank. Way to many iterations. this code has too many iterations. defaulting to groups eeeed to learn weeks week