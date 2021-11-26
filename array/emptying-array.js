let numbers = [1,2,3,4,5,6,7,8];
let another = numbers;

// console.log(numbers);
// console.log(another);

// // 1st solution 
// numbers = []
// console.log(numbers);
// console.log(another);


// 2nd solution 
// numbers.length = 0;

// 3rd solution 
// numbers.splice(0, numbers.length);

//4th solution 
while(numbers.length > 0)
    numbers.pop();
console.log(numbers);
console.log(another);
