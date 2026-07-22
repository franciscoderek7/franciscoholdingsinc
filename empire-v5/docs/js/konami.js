
let code=[];

let target=[
"ArrowUp",
"ArrowUp",
"ArrowDown",
"ArrowDown",
"ArrowLeft",
"ArrowRight",
"ArrowLeft",
"ArrowRight",
"b",
"a"
];


document.addEventListener(
"keydown",
e=>{

code.push(e.key);

if(code.length>target.length)
code.shift();


if(
JSON.stringify(code)==JSON.stringify(target)
){

goToFloor(392);

alert(
"EMPIRE OVERRIDE: FLOOR 392"
);

}

});

