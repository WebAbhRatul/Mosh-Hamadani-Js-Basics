let arr = [3,4,5,6,8,9];
arr.sort();
console.log(arr);
arr.reverse();
console.log(arr);

let objArr = [
    {id:1, name:'Node.js'},
    {id:2, name:'Aavascript'}
]

objArr.sort();
console.log(objArr);

objArr.sort(function(a,b){
    let aName = a.name.toLowerCase();
    let bName = b.name.toLowerCase();

    if(aName < bName) return -1;
    if(aName > bName) return 1;
    return 0;
})
console.log(objArr);
