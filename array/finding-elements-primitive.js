const alphaBet = ['a', 'b', 'c', 'd', 'e', 'f', 'a' ,'g','a'];

console.log(alphaBet.indexOf('a',3));
console.log(alphaBet.indexOf(-1));
console.log(alphaBet.lastIndexOf('a'));
console.log(alphaBet.indexOf('a') !== -1);
console.log(alphaBet.includes(1));


const array1 = [12,4,6,7,8,9,22,66,99];
let found = function(element){
    let arr = [];
    for(let item of element)
        if(item > 10)
            arr.push(item)

    
    return arr;
}

console.log(found(array1));



const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
]

let course = courses.find(function(course){
    return course.name === 'a';
});
console.log(course);

 course = courses.findIndex(function(course){
    return course.name === 'a';
});
console.log(course);



// for(let items of courses)
//     for( let key of Object.keys(items))
//         console.log(key, items[key]);

