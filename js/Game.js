class Jogo {
  constructor() {}

  lerEstado() {
    var estadoJogoRef = database.ref("estadoJogo");
    estadoJogoRef.on("value", function(dados) {
      estadoJogo = dados.val();
    });
  }

  inicio() {
    jogador = new Jogador();
    numJogadores = jogador.lerNum();

    form = new Form();
    form.mostrar();
    carro1 = createSprite(width/2-50,height-100)
    carro2 = createSprite(width/2+100,height-100)
    carro1.addImage(ford)
    carro2.addImage(nissan)
    carro1.scale = 0.07;
    carro2.scale = 0.07;

    carros = [carro1,carro2]
  } 

  controleJogadores(){
    if (keyIsDown(UP_ARROW)) {
      jogador.posY += 10;
      jogador.atualizar();
    }
  }

  jogar(){
   this.mudarElementos();
   Jogador.lerInfJogadores();
   if (todosJogadores != undefined) {
    image(pista, 0, -height*5, width, height*6)
    

    var indice = 0;
    for(var jgdr in todosJogadores){
      indice = indice + 1;
      var x = todosJogadores[jgdr].posX;
      var y = height - todosJogadores[jgdr].posY;

      carros[indice-1].position.x = x;
      carros[indice-1].position.y = y;

      this.controleJogadores();
      if (indice === jogador.indice) {
        stroke(10);
        fill("red");
        ellipse(x, y, 60, 60);
        camera.position.y=carros[indice-1].position.y
      }
      
    }
    drawSprites();
   }



}
  mudarElementos() {
    form.esconder();
    form.tituloImg.position(40, 50);
    form.tituloImg.class("tituloAposEfeito");
  }
  update(estado){
   database.ref("/").update({
     estadoJogo:estado
   })

  }




  }
