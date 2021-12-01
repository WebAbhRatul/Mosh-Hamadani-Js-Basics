const numbers = [1,2,34,54,56,6,67];

// function getMax(array){
//     if(array.length <= 0) return 'Undefined';
//     let max = array[0];
//     for(let i=1; i<array.length; i++){
//         if(array[i] > max)
//             max = array[i];
//     }
//     return max;
// }

function getMax(array){
   return array.reduce((accumulator,curretValue) =>{
        (accumulator > curretValue) ? accumulator : curretValue;
        
    });
}
let maxi = getMax(numbers);
console.log(maxi);