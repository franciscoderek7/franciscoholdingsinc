
async function loadMetrics(){

const response =
await fetch("data/metrics.json");


const data =
await response.json();


document.getElementById(
"business"
).innerHTML = `

<p>Revenue: $${data.business.revenue}</p>
<p>Customers: ${data.business.customers}</p>
<p>Leads: ${data.business.leads}</p>
<p>Demos: ${data.business.demos}</p>

`;


document.getElementById(
"systems"
).innerHTML =
data.systems;

document.getElementById(
"agents"
).innerHTML =
data.agents
.map(
agent =>
`
<p>
${agent.name}:
${agent.status}
</p>
`
)
.join("");

}


window.onload=
loadMetrics;

