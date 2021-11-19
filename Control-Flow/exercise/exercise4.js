function showNumbers(limit){
    for(let i=0; i<=limit; i++){
        if(i%2 === 0){
          return  'Even';
        }
        else{
           return  'Odd';
        }
    }
}


console.log( showNumbers(10));
