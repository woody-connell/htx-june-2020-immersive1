const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// for ( var i = 0; i < companies.length; i++){
    

//     console.log(companies[i]);


// }

// companies.forEach(function(index){
//     console.log(index)
// })

// var newCompanies = companies.map(function(company){
//     company.end = 2020;
//     return company
// })

// console.log(newCompanies)


// var filteredAges = ages.filter(function(agesValue){

//     return agesValue != 33;
// })

// console.log(filteredAges);

//filter out ages greater than 35
// var youngerThan35 = ages.filter(function(age){
//     return age <= 35;
// })
// console.log(youngerThan35);

//filter out all even numbers
var oddAges = ages.filter(function(age){
    return age % 2 != 0;
})

console.log(oddAges);