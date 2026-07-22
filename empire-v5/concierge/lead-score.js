
function qualifyLead(input){

let score=0;


if(input.email)
score+=20;


if(input.company)
score+=25;


if(input.budget)
score+=30;


if(input.timeline)
score+=25;


let category="cold";


if(score>=70)
category="hot";

else if(score>=40)
category="warm";


return {

score:score,

category:category

};

}


module.exports={
qualifyLead
};

