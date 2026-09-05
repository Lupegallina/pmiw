

function  imagenes() {
  fondo=loadImage("data/bosque.png");
  suelo=loadImage("data/suelo.png");
}
function  framesCaminando() {
  for (let i= 0; i<13; i++) {
    osoCamina[i]=loadImage("data/frame_"+(i+1)+".png");
  }

  return osoCamina;
}


function bosque(fondo, veloFondo) {
  image(fondo, veloFondo, 0);
}

function piso(suelo, veloPiso){
  image(suelo, veloPiso, 435, 803, 200);
}


function cualOsito(queOso){
  
  contador = contador +1;
  if (contador>= limite) {
   i=(i+1) %queOso.length
   contador=0
  } 
  
  return queOso[i]; 
}

function osito(veloOso) {
   osoMovimiento= osoMovimiento+veloOso;
   queOso=osoCamina;
  image(queOso, osoMovimiento, 350, 200);
}
