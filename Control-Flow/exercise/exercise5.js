//count truthy value from an array
const array1 = [1,2,3,4,9,false,undefined,NaN];
let count = 0;
function countTruthy(array){
    for(let value of array){
       if(value){
           count++;
       }
    }
    return count;
  
}

console.log(countTruthy(array1));

