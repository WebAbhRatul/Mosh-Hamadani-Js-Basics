// let num1 = [1,2,3,4];
// let num2 = [5,6,7,8];
// // Merge using the spread operator
// // let mergeResults = [...num1,...num2];


// // Merge using array.concat() method
// // let mergeResults = num1.concat(num2);
// // let results = num2.concat(num1);
// // let merge = [].concat(num2,num1);
// // console.log(mergeResults);
// // console.log(results);



// // Merge using array.push() method
// num1.push(...num2);
// console.log(num1);

// ///slice & splice & split

// let arr = [1,2,3,4,'hello',8.90,{A:'a',B:2}];
// let newArr = arr.slice(0,4);
// console.log(newArr);
// arr.slice(0,4);
// console.log(newArr);



// Splice() 
let num = [1,2,3,4,5,'hello','how','are','you'];
let pokko = num.slice()

let conto = num.splice(2,0,num[5])
console.log(conto);

// let newNum = num.splice(0,4);
// console.log(num);

// num.splice(3,1);
// console.log(num);
// let num2 = num.slice(2,3);
// console.log(num);
// console.log(num2);

// num.splice(3,0,'a','b','c');
// console.log(num);




