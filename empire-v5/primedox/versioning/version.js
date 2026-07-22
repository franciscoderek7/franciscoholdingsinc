
function createVersion(document){

return {

document_id:document.document_id,

version:
(document.version || 0)+1,

timestamp:
new Date()
.toISOString(),

status:"saved"

};

}


function compareVersions(a,b){

return {

same:
JSON.stringify(a)===JSON.stringify(b)

};

}


module.exports={
createVersion,
compareVersions
};

