
const sessions={};


function createSession(user){

const id =
Date.now()
.toString();


sessions[id]={

user:user,

created:
new Date()
.toISOString()

};


return id;

}


function getSession(id){

return sessions[id] || null;

}


module.exports={
createSession,
getSession
};

