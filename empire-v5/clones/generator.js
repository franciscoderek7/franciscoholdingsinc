
const industries =
require("./config/industries.json");


function createClone(industry){

return {

name:industry.name,

agent:industry.agent,

offer:industry.offer,

created:
new Date()
.toISOString()

};

}


function generateAll(){

return industries.industries
.map(createClone);

}


module.exports={
createClone,
generateAll
};

