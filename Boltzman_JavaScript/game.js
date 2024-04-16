

class Game extends Phaser.Scene{

  create(){
    this.scene.add('game', Game);
    this.scene.add('menu', Menu);
    this.scene.add('bootGame', Scene1);
    this.scene.add('playGame', Scene2);


    this.scene.start('bootGame')

  }




}





var config = {

    type: Phaser.AUTO,
    scale: {
      mode: Phaser.Scale.FIT,
      parent: 'phaser example',
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width:  window.innerWidth,
      height: 720,
      

    },
    physics: {
      default: 'arcade',
      arcade: {
          debug: false
      }
  },

    scene: Game,
    

    
  };
  
  
  var game = new Phaser.Game(config);