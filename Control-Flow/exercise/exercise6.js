function showObjProperties(obj){
    for(let key in obj){
        if(typeof obj[key] !== 'string') continue;
        else console.log(key, obj[key]);
    }
}

const person={
    name:'Ratul',
    age: 26,
    student: true,
    university: 'BUBT'
}

showObjProperties(person);