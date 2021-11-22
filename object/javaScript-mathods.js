// JavaScript Methods and this Keyword
const person = {
    name:'Jhon',
    greet:()=>{
        console.log('Hello');
    }
}
person.greet();
console.log(person.name);

// JavaScript Built-In Methods
let number = '23.44';
let result = parseInt(number);
console.log(number);
console.log(typeof result);

// Adding a Method to a JavaScript Object
const student ={};
// adding property
student.name = 'Ratul';
student.greetings=()=>{console.log('Welcome to our school');}
console.log(student);
student.greetings();

// JavaScript this Keyword
const person2 ={
    name2 : 'abba',
    age:60,
    behaviour:function (){
        console.log('You are very polite'+' '+this.name2);
    }
}
person2.behaviour();


const person3 = {
    name :'Jhon',
    age:50,
    greet:function(){
        let surname = 'Doe';
        console.log('Hello Mr'+' '+this.name+' '+surname);
    }
}
person3.greet();