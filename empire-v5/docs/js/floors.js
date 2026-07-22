const empireFloors = [
{
floor:1,
name:"Francisco Holdings HQ",
color:"#d4af37",
icon:"🏛️"
},
{
floor:2,
name:"OmniGuard Security",
color:"#00ff88",
icon:"🛡️"
},
{
floor:3,
name:"PrimeDox AI",
color:"#ff4400",
icon:"📄"
},
{
floor:4,
name:"CCLDR Legal Education",
color:"#00f0ff",
icon:"⚖️"
},
{
floor:5,
name:"Vault Velocity Auto",
color:"#ff0066",
icon:"🏎️"
},
{
floor:6,
name:"TechPetCage",
color:"#ffaa00",
icon:"🐾"
},
{
floor:7,
name:"Kiaros Time AI",
color:"#aa00ff",
icon:"⏰"
},
{
floor:8,
name:"CleanSwarm",
color:"#00ffaa",
icon:"🤖"
},
{
floor:9,
name:"BENO-X",
color:"#ff4444",
icon:"⚖️"
},
{
floor:10,
name:"Gap Hunter AI",
color:"#44ff44",
icon:"🔍"
}
];

for(let i=11;i<=392;i++){
 empireFloors.push({
  floor:i,
  name:`Empire Company Floor ${i}`,
  color:`hsl(${i},80%,50%)`,
  icon:"🏢"
 });
}
