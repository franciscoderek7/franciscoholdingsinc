
const fs=require("fs");

const file =
"./portal/users/users.json";


function load(){

return JSON.parse(
fs.readFileSync(file)
);

}


function save(data){

fs.writeFileSync(
file,
JSON.stringify(data,null,2)
);

}


function createUser(name,email){

let data=load();


let user={

id:
"user-"+Date.now(),

name:name,

email:email,

services:[],

created:
new Date()
.toISOString()

};


data.users.push(user);

save(data);


return user;

}


function addService(userId,service){

let data=load();


let user =
data.users.find(
u=>u.id===userId
);


if(user){

user.services.push(service);

}


save(data);

}


module.exports={
createUser,
addService
};

