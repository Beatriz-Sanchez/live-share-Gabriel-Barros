var canvas;
var fundo;
var database, estadoJogo;
var form, jogador, jogo, numJogadores;
var todosJogadores;
var ford,nissan,pista
var carros = []
var carro1,carro2



function preload() {
  fundo = loadImage("./assets/planodefundo.png");
  ford  = loadImage("./assets/car1.png");
  nissan = loadImage("./assets/car2.png");
  pista = loadImage("./assets/PISTA.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  jogo = new Jogo();
  jogo.lerEstado();
  jogo.inicio();
}

function draw() {
  background(fundo);
  if (numJogadores === 2) {
    jogo.update(1);
  }

  if (estadoJogo === 1) {
    jogo.jogar();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


