var gameSettings = {
    playerSpeed: 200,



}
var config = {

    width:  window.innerWidth,
    height: 720,
    backgroundColor: 0x000000,
    scene: [Menu,Prologo,Creditos,Scene1,Scene2,GameOver],
    pixelArt: true,
    physics:{
      default: "arcade",
      arcade:{
        debug: false}
    }
    

    
  }
  
  
  var game = new Phaser.Game(config);