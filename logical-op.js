// logical-and (&&) {returns true if both operand are true}
console.log(true && true); 
console.log(true && false); 
console.log(false && false); 


// if you have hignIncome and goodCreditScore, you are eligible for loan 
let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
let applicaionRefused = !eligibleForLoan;

if(applicaionRefused){
    console.log('Your application refused for loan');
}else{
    console.log('You are  eligible for loan');
}

// logiccal operator with non booleans 
//flasy values - undefined,null,0,empty srting,NaN
//truthy values - anything that is not falsy values
// let userColor = 'red';
let userColor; //undefined
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);