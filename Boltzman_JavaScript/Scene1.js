class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }
  
    preload(){
      this.load.image("background2", "assets/Sprite_Sheet_backgrounds/Background2.png");
      this.load.spritesheet("ship", "assets/Sprite_Sheet_Ships/Model1/1.png",{
        frameWidth: 32,
        frameHeight: 30
      });
      this.load.spritesheet("explosion","assets/Efects/Explosion1.png",{
        frameWidth: 53,
        frameHeight: 39.66
      });
      
      
      
      
    }
  
    create() {
        
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
  }
  