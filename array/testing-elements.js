const numbers = [1,-1,5,7,8,9];
const elementsType = numbers.every(function(value){
    return value >= 0;
})
console.log(elementsType);


const numbers2 = [1,-1,5,7,8,9];
const elementsType2 = numbers2.some(function(value){
    return value >= 0;
})
console.log(elementsType2);