walk();
// run(); // Error because of hoisting

function walk(){
    console.log('walk');
}

let run = function(){
    console.log('run');
};

run();