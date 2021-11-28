const arr = [1,2,3,4,5,6,7,8,9];

// end 
arr.pop();
arr.pop();
arr.pop();
arr.pop();
console.log(arr);

// start 
arr.shift();
arr.shift();
arr.shift();
console.log(arr);

arr.unshift(1,2,3,4,5,6,7,8);
console.log(arr);

// middle 
arr.splice(3,4);
console.log(arr);