
const fs=require("fs");


function timestamp(){

return new Date()
.toISOString();

}


function createEvent(type,message){

return {

type:type,

message:message,

time:timestamp()

};

}


function checkAgent(agent){

return createEvent(
"agent_check",
agent+" checked"
);

}


module.exports={
createEvent,
checkAgent
};

