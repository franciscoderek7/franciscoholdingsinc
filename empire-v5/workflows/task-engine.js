
const fs=require("fs");

const file =
"./workflows/queue/tasks.json";


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


function createTask(agent,type,payload){

let data=load();


let task={

id:
"task-" + Date.now(),

agent:agent,

type:type,

payload:payload,

status:"queued",

created:
new Date()
.toISOString()

};


data.tasks.push(task);

save(data);

return task;

}


function updateTask(id,status){

let data=load();


let task =
data.tasks.find(
t=>t.id===id
);


if(task){

task.status=status;

}


save(data);

}


module.exports={
createTask,
updateTask
};

