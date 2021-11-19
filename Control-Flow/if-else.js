//hour
//if hour between 6am to 12pm: Good Morning
//if hour between 12pm to 6 pm: good afternoon
//otherwise good evening

let hour = 10;
if(hour >= 6 && hour < 12) console.log('Good Morning');
else if(hour >= 12 && hour < 18) console.log('Good afternoon');
else console.log('Good evening');