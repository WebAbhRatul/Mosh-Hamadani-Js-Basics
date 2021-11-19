// Divisible by 3 ==> Fizz
//Divisible by 5 ==> Buzz
//Divisible by 3 and 5 ==> FizzBuzz
//Not divisible by 3 and 5 ==> input
//not a number ==> 'Not a number'

function fizzBuzz(num){
    if(typeof num === 'number'){
        if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
        else if (num % 5 === 0) return 'Buzz';
        else if (num % 3 === 0) return 'Fizz';
        else return num;
    }else return 'Not a number'
}

let check = fizzBuzz(15);
console.log(check);