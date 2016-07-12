//taller de programacion
//elipse que sigue al mouse en un fondo verde. despues probe un cuadrado.
//funciones y variables
//variables: declaracion y asignacion
var anchoElipse;
anchoElipse = 100;
var alturaElipse = 50;

//scope, rango o alcance de variable
//variables pueden ser globales o locales: global declaradas fuera de un cuerpo de funcion. local declaradas dentro de cuerpo de funcion solo se puede variar dentro de la misma funcion


function setup() {
  //pa cambiar el ritmo del draw
  frameRate(5);
  //funcion crear un lienzo
  //createCanvas(1300, 590);
  createCanvas(windowWidth, windowHeight);
  //color del fondo
  background(random(255), random(255), random(255), random(255));
  //color de lo que viene
  fill(0, 100, 100);
  //borde
  strokeWeight(10);
  stroke(180, 100, 100);

}

function draw() {
  muchaselipse();
  background(random(255), random(255), random(255), random(255));
  //fondoRojo();
  //figura cuadrado
  anchoElipse = 50;
  rect(mouseX, mouseY, anchoElipse, alturaElipse);

}

function fondoRojo() {
  var rojo = 255;
  background(rojo, 80, 80)
  console.log("vamo a calmarno" + rojo);
}

function muchaselipse() {
  var muchas = 50;
  for (var i = 0; i < muchas; i++) {
    //noStroke();

    var ancho = 100;
    var alto = 100;
    fill(random(255), random(255), random(255), random(255));
    strokeWeight(random(32));
    stroke(random(255), random(255), random(255), random(255));
    ellipse(random(width), random(height), random(ancho), random(alto));
  }
}