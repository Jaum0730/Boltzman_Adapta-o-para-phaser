class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }
  
    preload(){
      
      this.load.image("background2", "assets/Sprite_Sheet_backgrounds/Background2.png");
      this.load.spritesheet("ship_player", "assets/Sprite_Sheet_Ships/Model1/1.png",{
        frameWidth: 32,
        frameHeight: 30
      });
      this.load.spritesheet("explosion","assets/Efects/Explosion1.png",{
        frameWidth: 53,
        frameHeight: 39.66
      });
      this.load.spritesheet("asteroid", "assets/Sprite_Sheet_backgrounds/Asteroid.png",{
        frameWidth : 50,
        frameHeight: 15
      })
      
      
      
      
    }
  
    create() {
      // Create the loading text
      this.loadingText = this.add.text(this.game.renderer.width/2, 430, "Loading game...", { fontSize: '32px Orbitron' });
      
      // Set up the loading animation
      this.loadingAnimation = this.tweens.add({
        targets: this.loadingText,
        alpha: 0.5, // Fade the text in and out
        duration: 1500, // Animation duration in milliseconds
        ease: 'Sine.easeInOut', // Easing function
        loop: -1, // Loop the animation infinitely
        yoyo: true // Make the animation go back and forth
      });
    
      // Start the actual game scene after a short delay
      this.time.delayedCall(2000, () => {
        this.scene.start("playGame");
      });


      
        
        
    }
    
  }
  
  