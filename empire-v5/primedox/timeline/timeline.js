
function createTimelineEvent(type,description){

return {

type:type,

description:description,

timestamp:
new Date()
.toISOString()

};

}


function addEvent(timeline,event){

timeline.push(event);

return timeline;

}


module.exports={
createTimelineEvent,
addEvent
};

