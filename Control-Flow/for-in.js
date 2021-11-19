// for in 
const person={
    name:'Ratul',
    age: 26,
    student: true,
    university: 'BUBT'
}

for(let items in person){
    console.log(items, person[items]);
}

const colors = ['red','blue','green'];
for(let index in colors) console.log(index, colors[index]);