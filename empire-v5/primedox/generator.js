
const fs=require("fs");


function loadTemplate(name){

const registry =
require("./templates/registry.json");


return registry.templates
.find(
t=>t.name===name
);

}


function createDraft(template,data){

return {

template:template.name,

created:new Date()
.toISOString(),

content:data,

status:"draft",

reviewRequired:
template.category==="legal_education"

};

}


module.exports={
loadTemplate,
createDraft
};

