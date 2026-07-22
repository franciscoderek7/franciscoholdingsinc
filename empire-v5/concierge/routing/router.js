
const services =
require("./service-map.json");


function findService(message){

let text =
message.toLowerCase();


for(let service of services.services){

for(let word of service.keywords){

if(text.includes(word)){

return service.name;

}

}

}


return "Empire Concierge";

}


module.exports={
findService
};

