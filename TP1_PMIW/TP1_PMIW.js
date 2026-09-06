let fondo;
let suelo;
let camina, sentadio;


let i=0;
let contador=1;
let limite=9;

let veloFondo=0.3;
let posicionFondo=0;
let veloPiso=1;
let posicionPiso=0;
let veloOso=1.5;
let osoMovimiento=0;
let estado= "caminando";

let osoActual;

let queOso= [];
let caminandoAndo= [];
let sentadoAndo=[];

let botoncitolar=180;
let botoncitoAnc=100;
let botonX=610, botonY=490;
let mostrarBoton=false;

function preload() {
  imagenes();

  caminandoAndo= framesCaminando(1, 9);
  sentadoAndo= framesCaminando(10, 4);
}

function setup() {
  createCanvas(800, 600);
}

function draw() {

  bosque(fondo, veloFondo);
  piso(suelo, veloPiso);
  
  estadoOso();
    entorno();

    botonsilo();
  osito(veloOso);
}

function mousePressed() {

  if (mouseX > botonX && mouseX < botonX + botoncitoAnc &&
    mouseY > botonY && mouseY < botonY + botoncitolar) {

    botonsiloReset();
  }
}
