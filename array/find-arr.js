const numbers = [1,2,3,4,5,6,1,7];
console.log(numbers.indexOf('1'));
console.log(numbers.indexOf(1,2));
console.log(numbers.indexOf(1));

console.log(numbers.lastIndexOf(1));

console.log(numbers.indexOf('1') == -1);
console.log(numbers.indexOf(1) !== -1);