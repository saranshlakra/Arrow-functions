// arrow function
 // 1) simple one line arrow function with single parameter.
var presentYear = 2021;
const age = birthYear => presentYear - birthYear;
console.log(age(1995));


// 2) one line arrow function with multiple parameters
const squareArea = (length, breadth) => length*breadth;
var area = squareArea(10,20);
console.log(area); 


// 3) little complicated arrow function
const yearUntilRetirement = birthYear =>{
    var age = 2021 - birthYear;
    var retirement = 60 - age;
    // return retirement;
     console.log(age);
     return retirement;
}
console.log(yearUntilRetirement(1995));
