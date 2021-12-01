const numbers =[1,2,3,4,5,6,1,3,1,3,1];

// function count(array,searchElement){
//     count = 0;
//     if (array.includes(searchElement) === false){
//         return 0;
//     }else{
//         array.forEach(element => {
//             if(element === searchElement)
//                 count++;
            
//         });
//         return count;
//     }
// }
// console.log(count(numbers,4));

// const numbers = [1,-6,7,9,44,-77,999,-6666,7000];
// let sum = numbers.reduce((a,c)=>{
//     return a + c;
// });
// console.log(sum);

function searchCount(array, searchElement){
    if(array.includes(searchElement)===false) return 0;
    else{
        array.reduce((count,c)=>{
            if(c === searchElement) return count++;
        },0);
    }

}

console.log(searchCount(numbers,-1));