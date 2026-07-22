let scene;
let camera;
let renderer;

let currentFloor=1;

function initEmpire(){

scene=new THREE.Scene();

camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
5000
);

camera.position.set(0,10,40);

renderer=new THREE.WebGLRenderer({
antialias:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

document.body.appendChild(renderer.domElement);


const light=new THREE.PointLight(0xffffff,2);

light.position.set(0,100,100);

scene.add(light);


createTower();

animate();

}


function createTower(){

empireFloors.forEach((floor)=>{

const height=1.5;

const geometry=
new THREE.BoxGeometry(
10-(floor.floor/60),
height,
10-(floor.floor/60)
);


const material=
new THREE.MeshStandardMaterial({
color:floor.color
});


const mesh=
new THREE.Mesh(
geometry,
material
);


mesh.position.y=
floor.floor*height;


scene.add(mesh);

});

}


function moveToFloor(number){

currentFloor=number;

camera.position.y=
number*1.5;

}


function animate(){

requestAnimationFrame(animate);

renderer.render(
scene,
camera
);

}


window.moveToFloor=moveToFloor;
window.onload=initEmpire;
