
const fs=require("fs");

const file =
"./monitoring/metrics/services.json";


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


function record(service,status,responseTime){

let data=load();


data.services.push({

service:service,

status:status,

responseTime:responseTime,

timestamp:
new Date()
.toISOString()

});


save(data);

}


function summary(){

let data=load();

return {

checks:
data.services.length,

last:
data.services[
data.services.length-1
]

};

}


module.exports={
record,
summary
};

