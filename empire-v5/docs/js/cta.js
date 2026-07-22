
function getOffer(floor){

if(floor<=50)
return "$49/month";

if(floor<=100)
return "$99/month";

if(floor<=150)
return "$499/month";

if(floor<=200)
return "$999/month";

if(floor<=250)
return "$2999/month";

if(floor<=300)
return "$9999/month";

if(floor<=350)
return "$49999/month";

return "Custom Enterprise";

}


function openOffer(){

alert(
"Contact Empire Sales: "+
getOffer(window.currentFloor || 1)
);

}


window.openOffer=openOffer;

