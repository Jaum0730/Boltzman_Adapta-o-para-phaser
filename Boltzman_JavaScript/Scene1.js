class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }
  
    preload(){
      this.load.spritesheet("Boss", "assets/Sprite_Sheet_Ships/Boss.png",{
        frameWidth: 400,
        frameHeight: 400
      });
      
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
      });
      this.load.spritesheet("beam", "assets/Efects/beam.png",{
        frameWidth : 16,
        frameHeight: 16
      });
      this.load.spritesheet("missel", "assets/Efects/missel.png",{
        frameWidth : 20.33,
        frameHeight: 86
      });
      this.load.spritesheet("alien", "assets/Sprite_Sheet_Ships/Alien.png",{
        frameWidth : 32,
        frameHeight: 32
      });

      

      

      this.load.audio("audio_beam", "assets/snd/beam.ogg");
      this.load.audio("audio_explosion", "assets/snd/explosion.ogg");

      this.load.audio("music_gameplay", "assets/snd/gameplay.ogg");

      
    }
  
    create() {
      // Create the loading text
      this.loadingText = this.add.text(this.game.renderer.width/2, 430, "Loading game...", { fontSize: '32px Orbitron' });
      //animação dos inimigos
      this.anims.create({
        key: "alien_anim",
        frames: this.anims.generateFrameNumbers("alien"),
        frameRate: 10,
        repeat: -1
     });
      //animação da nave do player
      this.anims.create({
        key: "ship_animation",
        frames: this.anims.generateFrameNumbers("ship_player"),
        frameRate: 10,
        repeat: -1
     });
    //animação disparo
    this.anims.create({
      key: "beam_anim",
      frames: this.anims.generateFrameNumbers("beam"),
      frameRate: 20,
      repeat: -1
    });

  this.anims.create({
    key: "missel_anim",
    frames: this.anims.generateFrameNumbers("missel"),
    frameRate: 20,
    repeat: -1
  });


    
    //Animação de efeitos
      this.anims.create({
      key: "explosion_animation",
      frames: this.anims.generateFrameNumbers("explosion"),
      frameRate: 10,
      repeat: 0,
      hideOnComplete: true,
      });

      this.anims.create({
        key: "heart_anim",
        frames: this.anims.generateFrameNumbers("heart"),
        frameRate: 10,
        repeat: -1,
        
        });

    //Animação Boss
      this.anims.create({
      key: "Boss_anim",
      frames: this.anims.generateFrameNumbers("Boss"),
      frameRate: 15,
      repeat: -1,
      
      });
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
  
  