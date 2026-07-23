
const crypto=require("crypto");
const fs=require("fs");

const file =
"./auth/sessions/sessions.json";


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


function createSession(user){

let data=load();


let token =
crypto
.randomBytes(24)
.toString("hex");


let session={

token:token,

user:user,

created:
new Date()
.toISOString()

};


data.sessions.push(session);

save(data);


return session;

}


module.exports={
createSession
};

