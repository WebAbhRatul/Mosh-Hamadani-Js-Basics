const numbers = [1,-6,7,9,44,-77,999,-6666,7000];
let sum = numbers.reduce((a,c)=>{
    return a + c;
});
console.log(sum);
