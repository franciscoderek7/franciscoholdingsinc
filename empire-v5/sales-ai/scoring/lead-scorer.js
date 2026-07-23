
function scoreLead(signals){

let score=0;


const rules=require("./rules.json");


rules.rules.forEach(rule=>{

if(signals.includes(rule.signal)){

score += rule.points;

}

});


let category="cold";


if(score>=60){

category="hot";

}
else if(score>=30){

category="warm";

}


return {

score:score,

category:category

};

}


module.exports={
scoreLead
};

