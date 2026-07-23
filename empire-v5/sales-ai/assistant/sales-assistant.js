
const scorer =
require("../scoring/lead-scorer");


function analyzeLead(lead){

return {

lead:lead,

priority:
scorer.scoreLead(
lead.signals
)

};

}


module.exports={
analyzeLead
};

