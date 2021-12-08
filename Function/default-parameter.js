function interest(principle,years,rate = 3.75){
    //  rate = rate || 3.75;
    //  years = years || 5;
    return principle * rate/100 * years;
}
console.log(interest(10000,5));