const numbers  = [1,2,3,4,5,6,7,9];

function search(arr,searchElement){
    for(let key of arr){
        if(key === searchElement) {
            console.log('true');
            break;
        }else{
            console.log('False');
            break;
        }
    
    }
}

search(numbers,-9);