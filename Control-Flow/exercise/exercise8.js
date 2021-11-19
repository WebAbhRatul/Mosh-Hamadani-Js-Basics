// find the average mark and define  grad
const marks = [50,90,40,60,80,90];
function calculateGrade(arr){
    let mark = 0;
    for (let value of arr){
        mark += value;
    }
    let average = mark/arr.length;
    console.log(average);
    if(average<60) return 'F';
    else if(average <70) return 'D';
    else if(average <80) return 'C';
    else if(average <90) return 'B';
    else if(average <100) return 'A';
    else return 'Out of grade'
    

} 

console.log(calculateGrade(marks));