
let elevatorFloor = 1;

function updateFloorDisplay(){

const counter =
document.getElementById("floorCounter");

if(counter){
counter.innerHTML =
`FLOOR ${elevatorFloor} / 392`;
}

const data =
empireFloors.find(
f=>f.floor===elevatorFloor
);

const info =
document.getElementById("floorInfo");

if(info && data){

info.innerHTML =
`
<h2>${data.icon} ${data.name}</h2>
<p>Floor ${data.floor}</p>
<p>Francisco Holdings Inc. Empire Platform</p>
<button onclick="openOffer()">
View Service
</button>
`;

}

}


function goToFloor(number){

if(number<1) number=1;
if(number>392) number=392;

elevatorFloor=number;

moveToFloor(number);

updateFloorDisplay();

}


function nextFloor(){

goToFloor(elevatorFloor+1);

}


function previousFloor(){

goToFloor(elevatorFloor-1);

}


document.addEventListener(
"keydown",
(event)=>{

if(event.key==="ArrowUp")
nextFloor();

if(event.key==="ArrowDown")
previousFloor();

});


let touchStart=0;

document.addEventListener(
"touchstart",
(e)=>{

touchStart=
e.changedTouches[0].screenY;

});


document.addEventListener(
"touchend",
(e)=>{

let end=
e.changedTouches[0].screenY;

if(touchStart-end>50)
nextFloor();

if(end-touchStart>50)
previousFloor();

});


window.goToFloor=goToFloor;

updateFloorDisplay();

