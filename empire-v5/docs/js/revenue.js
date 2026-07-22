
const revenueState = {

visitors:0,

leads:0,

sales:0,

monthlyRevenue:0

};


function trackVisitor(){

revenueState.visitors++;

saveRevenue();

}


function addLead(){

revenueState.leads++;

saveRevenue();

}


function recordSale(amount){

revenueState.sales++;

revenueState.monthlyRevenue += amount;

saveRevenue();

}


function saveRevenue(){

localStorage.setItem(
"empireRevenue",
JSON.stringify(revenueState)
);

}


function loadRevenue(){

let saved =
localStorage.getItem(
"empireRevenue"
);

if(saved){

Object.assign(
revenueState,
JSON.parse(saved)
);

}

return revenueState;

}


window.recordSale=recordSale;
window.addLead=addLead;

loadRevenue();

trackVisitor();

