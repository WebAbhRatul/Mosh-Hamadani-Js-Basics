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

// JavaScript Constructor Function Parameters
function Details(name,age,contactNo){
    this.name=name,
    this.age=age,
    this.contactNo=contactNo,
    this.greet2=function(){
        return ('Hi'+' '+this.name);
    }
}

let ratul = new Details('Ratul',26,01611311294);
console.log(ratul.name);
console.log(ratul.greet2());


