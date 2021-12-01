const numbers = [1,2,4,5,55,33,22,11,445,99];

const num =   numbers.filter(n => n % 2 === 0 || n % 3 === 0).map(n =>({value: n})).filter(n => n.value >= 10).map(n => n.value).join("-");
console.log(num);

// const items =  num.map(n => '<li>' + n + '</li>' );
// const items = num
// console.log(num);

// const html ='<ul>'+ items.join('') + '</ul>';
// console.log(html);