function arrayFromRange(min,max){
     let arr = [];
     for(let i = min; i<=max; i++){
         arr.push(i);
     }
     return arr;
}
console.log(arrayFromRange(-10,8));