

function  imagenes() {

  
  fondo=loadImage("data/bosque.png");
  suelo=loadImage("data/suelo.png");
  boton=loadImage("data/boton.png");
}
function  framesCaminando(primi, cant) {
    let osoCamina=[];
  for (let i= 0; i<cant; i++) {
    osoCamina[i]=loadImage("data/frame_"+(primi+i)+".png");
  }

  return osoCamina;
}


function bosque(fondo, veloFondo) {
  posicionFondo=posicionFondo-veloFondo;
  image(fondo, posicionFondo, 0);
}

function piso(suelo, veloPiso){
  posicionPiso=posicionPiso-veloPiso
  image(suelo, posicionPiso, 435, 803, 200);
    
  image(suelo, posicionPiso+800, 435, 803, 200);
}

function estadoOso(){
 if (estado=="caminando") {
    queOso=caminandoAndo;
  } else if (estado=="sentado") {
    queOso=sentadoAndo;
  }


  if (estado=="caminando" && osoMovimiento >= 400) {
    estado="sentado";
    osoMovimiento=400;
    i=0;
  }}
  
  function entorno(){
  
  if (estado=="caminando") {
    veloFondo=0.3;
    veloPiso=1;
    veloOso=1.5;
  } else if (estado=="sentado") {
    veloFondo=0;
    veloPiso=0;
    veloOso=0;
  }
  }

function cualOsito(queOso){
  
  contador = contador +1;
  if (contador>= limite) {
   i=(i+1) %queOso.length;
   contador=0;
  } 
  
  return queOso[i]; 
}

function osito(veloOso) {
   osoMovimiento= osoMovimiento+veloOso;
   osoActual=cualOsito(queOso);
  image(osoActual, osoMovimiento-100, 350, 200);
}

function botonsilo(){
if (estado=="sentado") {
    mostrarBoton = true;
  } else {
    mostrarBoton = false;
  }
  if (mostrarBoton) {
    image(boton, botonX, botonY, botoncitolar, botoncitoAnc);
  }

}

function botonsiloReset(){

  estado = "caminando";
  osoMovimiento = -100;
  i = 0;
posicionFondo=0;
posicionPiso=0;
}
