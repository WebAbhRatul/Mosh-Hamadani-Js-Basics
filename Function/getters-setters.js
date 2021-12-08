const person = {
    firstName: 'Ratul',
    lastName: 'Baba',
    get fullname(){
        console.log(`${person.firstName} ${person.lastName}`);
    },
    set fullname(value){
        if(typeof value !== 'string')
            throw new Error('This is not a string');
       let parts =  value.split(' ');
       if(parts.length !== 2)
            throw new Error('Enter first and last name');
       this.firstName = parts[0];
       this.lastName = parts[1];
    }
};

try{
    person.fullname = '';
}
catch(e){
    console.log(e);
}

person.fullname;
