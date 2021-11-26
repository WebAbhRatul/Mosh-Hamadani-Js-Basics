// using object literal
const person = {
    name : 'sam',
    age: 24
}

// using constructor function 
function Person(){
    this.name = 'Sam',
    this.age = 26
}
var person1 = new Person();
var person2 = new Person();

console.log(person1);
person1.greet=function(){
    console.log('Hi, Mr '+this.name);
}
console.log(person1);
person1.greet();
console.log(person2);
