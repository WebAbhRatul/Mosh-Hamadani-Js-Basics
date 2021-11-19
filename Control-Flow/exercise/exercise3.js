//Speed Limit = 70
// 5 -> 1 point
//Math.floor(1.3)
// 12 points -> suspedded

let speedLimit = 70;
let kmPerPoints = 5;
function checkSpeed(speed){
    if(speed <= speedLimit + kmPerPoints){
        return 'ok';
    }else{
        let points = Math.floor((speed-speedLimit)/kmPerPoints)
        if(points >= 12) return 'Suspended';
        else return 'Points: ' + points;
    }
}

let check = checkSpeed(75);
console.log(check);