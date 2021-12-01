const numbers = [1,2,3,4,5,6,7];
const excluded = [1,2,7];

function except(array, excluded){
    for(let i in excluded){
        for(let j in array){
            if (excluded[i] === array[j]){
                array.splice(j,1)
            }
        }
    }
    return array;
}

const kulli = except(numbers,excluded);
console.log(kulli);

