// sum of the number that multiple by 3 and 5 
let add = 0;
function sum(limit){
    for(let i=0; i<=limit; i++ ){
        if(i%3 === 0 || i%5 === 0){
            add +=i;
        }else continue;
    }
    return add;
}

console.log(sum(10));