
// switch case 
let role = 'guest';
switch(role){
    case 'guest':
        console.log('Guest User');
        break;
    case 'Admin':
        console.log('Admin User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
}

// if else 
// let role;
if(role == 'guest') console.log('Guest User ');
else if (role == 'admin') console.log('Admin User');
else if (role == 'moderator') console.log('Moderator User');
else console.log('Unknown User');

