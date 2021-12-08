const person = {
    firstName: 'Ratul',
    lastName: 'Baba',
    get fullname(){
        console.log(`${person.firstName} ${person.lastName}`);
    },
    set fullname(value){
       let parts =  value.split(' ');
       this.firstName = parts[0];
       this.lastName = parts[1];
    }
}

person.fullname = 'Abh Hurayra';
console.log(person.lastName);
person.fullname;
