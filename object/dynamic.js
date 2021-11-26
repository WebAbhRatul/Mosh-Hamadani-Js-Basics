const circle = {
    radius:1
}
console.log(circle);
circle.height = 10;
console.log(circle);

circle.greet=function(){
    return('Hello'+' '+this.radius);
}
console.log(circle);
console.log(circle.greet());

delete circle.greet;
console.log(circle);

console.log('20'/5);
