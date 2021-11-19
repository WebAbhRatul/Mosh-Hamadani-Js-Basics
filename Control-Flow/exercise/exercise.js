// write a function that takes two numbers and returns the maximum of two 
 function maximum(num1,num2){
     if(num1 > num2) return num1;
     else return num2;
 }
 let number = maximum(10, 40);
 console.log(number);


//  even odd 
function evenOdd(num){
    return (num%2===0) ? 'even' : 'odd';
}

let number2 = evenOdd(11);
console.log(number2);


// landscap or not 
function isLandscape(width,height){
    return (width>height);
}
let view = isLandscape(20,100);
console.log(view);

console.log(typeof true === 'boolean');