class Jogador {
  constructor() {
    this.nome = null;
    this.indice = null;
    this.posX = 0;
    this.posY = 0;
  }

  adicionarJogador() {
    var indiceJogador = "jogadores/jogador" + this.indice;

    if (this.indice === 1) {
      this.posX = width / 2 - 100;
    } else {
      this.posX = width / 2 + 100;
    }

    database.ref(indiceJogador).set({
      nome: this.nome,
      posX: this.posX,
      posY: this.posY
    });
  }

  lerNum() {
    var NumJogadoresRef = database.ref("numJogadores");
    NumJogadoresRef.on("value", dados => {
      numJogadores = dados.val();
    });
  }

  atualizarNum(num) {
    database.ref("/").update({
      numJogadores: num
    });
  }
  static lerInfJogadores(){
   var Infref = database.ref("jogadores")
   Infref.on("value",(dados)=>{
     todosJogadores = dados.val();
   });

  }
  atualizar(){
    var indiceJogador = "jogadores/jogador" + this.indice;

    database.ref(indiceJogador).update({
      posX: this.posX,
      posY: this.posY
    });
  }
 lerDist(){
  database.ref ("jogadores/jogador"+ this.indice).on("value",(dados)=> {
    var dados = dados.val();
    this.posX = dados.posX
    this.posY = dados.posY
  })




 }






}
