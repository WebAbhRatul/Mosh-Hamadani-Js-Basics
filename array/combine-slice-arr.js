let num1 = [1,2,3,4];
let num2 = [5,6,7,8];
// Merge using the spread operator
// let mergeResults = [...num1,...num2];


// Merge using array.concat() method
// let mergeResults = num1.concat(num2);
// let results = num2.concat(num1);
// let merge = [].concat(num2,num1);
// console.log(mergeResults);
// console.log(results);



// Merge using array.push() method
num1.push(...num2);
console.log(num1);