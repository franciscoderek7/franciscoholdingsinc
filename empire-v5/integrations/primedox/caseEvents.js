
const bus =
require("../../core/events/eventBus");


function newCase(data){

bus.emit(
"lead.created",
data
);

}


function documentCreated(data){

bus.emit(
"document.created",
data
);

}


module.exports={
newCase,
documentCreated
};

