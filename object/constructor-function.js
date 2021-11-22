function person(){
    this.name = 'Abu Hurayra Ratul constructor';
    this.age = 26
    this.greet=function(){
        console.log('Hello Abh Ratul, how are you ');
    }
}
let person1 = new person();
console.log(person1.name);
person1.greet();

// Create Multiple Objects with Constructor Function
function Student(){
    this.stname = 'Apple',
    this.stAge = 15,
    this.stGreet=function(){
        console.log('Hello '+ this.stname);
    }
}

let student1 = new Student();
student1.stGreet();

let student2 = new Student();
student2.stGreet();