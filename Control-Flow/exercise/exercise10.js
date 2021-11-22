// //finding prime number
// function showPrimes(limit){
//     for(let num = 2; num <= limit; num++){
//         let isPrime = true;
//         for(let factor = 2; factor<num; factor++){
//             if(num%factor===0){
//                  isPrime = false;
//                  break;
//             }
//         }
//           if(isPrime) console.log(num);
//     }
  
// }
// showPrimes(10);

let name = ['app','Ratul','Tahsin','doll']
for(let value of name){
    if(value.length >= 5) console.log(value);
}