let person = {
    name:'Ratul',
    age : 26,
    student:true
}

//dot notation
console.log(person.name);
person.name = 'Abh '+'Ratul';
console.log(person.name);

// bracket notation 
person['name'] = 'Abu Hurayra Ratul';
console.log(person['name']);

let selector = 'name';
person[selector] = 'Ratul Bubt';
console.log(person[selector]);