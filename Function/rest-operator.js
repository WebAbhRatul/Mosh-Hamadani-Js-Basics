function sum(...args){
   return args.reduce((a,b)=> a+b);
}
console.log(sum(10,9,2,32,2,2,2,2,22,2));

function shopCart(discount,...prices){
    let total = prices.reduce((a,b)=>a+b);
    return total * (1-discount);
}

console.log(shopCart(.2,50,50));