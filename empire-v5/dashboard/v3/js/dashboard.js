
let dashboardData={};


async function loadDashboard(){

let response =
await fetch("data/dashboard.json");

dashboardData =
await response.json();


renderDashboard();

}


function renderDashboard(){

document.getElementById("revenue")
.innerHTML =
dashboardData.metrics.revenue;


document.getElementById("agents")
.innerHTML =
dashboardData.agents
.map(agent=>
`
<div>
${agent.name}
:
${agent.status}
</div>
`
)
.join("");


document.getElementById("domains")
.innerHTML =
dashboardData.domains
.map(domain=>
`
<div>
${domain.name}
:
${domain.status}
</div>
`
)
.join("");

}


function exportJSON(){

let blob =
new Blob(
[
JSON.stringify(
dashboardData,
null,
2
)
],
{
type:"application/json"
}
);


let url =
URL.createObjectURL(blob);


let link =
document.createElement("a");

link.href=url;

link.download=
"empire-dashboard.json";

link.click();

}


window.exportJSON=exportJSON;


window.onload=
loadDashboard;

