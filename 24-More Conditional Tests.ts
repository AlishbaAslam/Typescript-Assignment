//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:


//• Tests for equality and inequality with strings

let name_1 : string = "alishba";
let name_2 : string = "aslam";

console.log(name_1 === name_2); //False
console.log(name_1 !== name_2); //True

//• Tests using the lower case function

let capital_name : string = "ALISHBA";
let small_name : string = "alishba";


console.log(capital_name.toLowerCase() === small_name); //True
console.log(small_name.toUpperCase() !== capital_name); //False

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log(5 === 5); //True
console.log(5 != 5); //False
console.log(10 > 5); //True
console.log(16 < 6); //False
console.log(10 >= 10); //True
console.log(5 <= 4); //False

//• Tests using "and" and "or" operators

console.log( 5 === 5 && 10 > 6 ); //True
console.log( 5 === 5 && 10 > 19 ); //False

//• Test whether an item is in a array

let array : number[] = [1,2,3,4,5,6];

let insideArray : boolean = array.includes(2);
console.log("Is 2 in array? ",insideArray); // True

let outsideArray : boolean = array.includes(7);
console.log("Is 7 in array? ",outsideArray); //False
