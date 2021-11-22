function createCircle(radius){
    return{
        radius,
        draw(num1,num2){
            return num1 + num2;
        }
    };
}
let circle1 = createCircle(5,7,9);
console.log(circle1.draw(3,7));
console.log(circle1.radius);

const name = {
    name:'Ratul',
    age: 20
}
console.log(name['name']);
console.log(name['age']);

// JavaScript Nested Objects
const student={
    name: 'Maggy',
    age: 26,
    class: 10,
    marks:{
        math:40,
        bangla:{
            firstPaper:50,
            secondPaper:70
        },
        english:90
    },
    grade:"A+"

   
}
console.log(student.marks.bangla.secondPaper);
console.log(student.marks.bangla.firstPaper);
console.log(student.grade);