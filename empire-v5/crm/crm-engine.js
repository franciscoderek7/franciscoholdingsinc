
const fs=require("fs");


const leadsFile =
"./crm/leads/leads.json";


function load(){

return JSON.parse(
fs.readFileSync(leadsFile)
);

}


function save(data){

fs.writeFileSync(
leadsFile,
JSON.stringify(data,null,2)
);

}


function createLead(name,email,source){

let data=load();


let lead={

id:
"lead-"+Date.now(),

name:name,

email:email,

source:source,

stage:"new_lead",

created:
new Date()
.toISOString()

};


data.leads.push(lead);

save(data);


return lead;

}


function updateStage(id,stage){

let data=load();


let lead =
data.leads.find(
l=>l.id===id
);


if(lead){

lead.stage=stage;

}


save(data);

}


module.exports={
createLead,
updateStage
};

