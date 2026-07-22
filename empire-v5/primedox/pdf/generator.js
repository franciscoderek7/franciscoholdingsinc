
const fs=require("fs");


function createDocumentHTML(title,content){

return `
<html>

<head>
<title>${title}</title>
</head>

<body>

<h1>${title}</h1>

<p>
${content}
</p>

</body>

</html>
`;

}


function saveDraft(filename,title,content){

let html =
createDocumentHTML(
title,
content
);


fs.writeFileSync(
filename,
html
);


return filename;

}


module.exports={
createDocumentHTML,
saveDraft
};

