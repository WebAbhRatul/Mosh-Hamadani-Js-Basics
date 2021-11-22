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