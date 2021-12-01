const movies = [
    {title:'a',year:2018,ratting:4.5},
    {title:'b',year:2018,ratting:4.7},
    {title:'c',year:2018,ratting:3},
    {title:'d',year:2017,ratting:4.5},
]

let filtered = movies.filter(num=>{
    return num.year === 2018 && num.ratting > 4;
})
console.log(filtered);

let sorto = movies.sort((a,b)=>{
    if(a.ratting < b.ratting)
        return 1;
    if(a.ratting > b.ratting)
        return -1;
    return 0;
})

let movie = 
console.log(movie);

console.log(sorto);