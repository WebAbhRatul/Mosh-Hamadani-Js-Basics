const number = [1,2,3,4,5,6];

function move(array,index,offset){
    let output = [...array];
    if(array.length <= offset || index+offset < 0)
        return 'error!';
    else{
         let element = output.splice(index,1)[0];
    output.splice(index+offset,0,element);
    return output;
    }
   
}

console.log(move(number,0,-3));