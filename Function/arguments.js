function sumTwo(a,b){
     console.log(arguments);
    return a + b;
   
}

console.log(sumTwo(9,10));
console.log(sumTwo(8));
console.log(sumTwo(1,2,3,4,5,7));

// Arguments 
function sum(){
    let total = 0;
    for(let value of arguments)
        total += value;
    return total;
}
console.log(sum(1,2,3,4,5,6,7,87));