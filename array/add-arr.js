const numbers = [6,7,8,9];

console.log('Add numbers to the last');
numbers.push(10,11,12,13,14);
console.log(numbers);

console.log('Add numbers to the first');
numbers.unshift(1,2,3,4,5);
console.log(numbers);

console.log('Add numbers to the middle');
numbers.splice(4,0,'Abh Ratul','Apple Mahmud');
console.log(numbers);


