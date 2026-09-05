let fondo;
let suelo;

let camina,sentadio;
let osoCamina=[];
let i=0;
let contador=1;
let limite=9;

let veloFondo=0.3;
let veloPiso=1;
let veloOso=1.5;
let osoMovimiento=0;
let estado= "caminando";
let queOso= [];



function preload() {
  imagenes();
  framesCaminando();
  

}

function setup() {
  createCanvas(800, 600);
}

function draw() {

  bosque(fondo,veloFondo);
  piso(suelo,veloPiso);

  if (estado=="caminando") {
    osoMovimiento= osoMovimiento+veloOso;
  }
  
    if (estado=="caminando" && osoMovimiento >= 400) {
    estado="sentado";
    osoMovimiento=400;
  }
  
   if (estado=="caminando") {
    queOso=osoCamina;
  }else if (estado=="sentado") {
    queOso=osoCamina;
  }
  

  if (estado=="caminando") {
    veloFondo=0.3;
    veloPiso=1;
    veloOso=1.5;
  } else if (estado=="sentado") {
    veloFondo=0;
    veloPiso=0;
    veloOso=0;
  }
  
   cualOsito(osoCamina);
  
  osito(veloOso);
}
