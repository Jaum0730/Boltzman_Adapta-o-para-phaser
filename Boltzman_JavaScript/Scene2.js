
class Scene2 extends Phaser.Scene{
    constructor(){
      super("playGame");
      
    }
    create(){
      this.background2 = this.add.tileSprite(0,0,config.width,config.height,"background2");
      this.background2.setPosition(100,100);
      this.background2.setScale(2);
  
      //Logica para naves
        this.ship1 = this.add.sprite(config.width/2+50, config.height/2, "ship_player");
        this.ship1.setScale(2);
        //Animação das naves
        this.anims.create({
          key: "ship_animation",
          frames: this.anims.generateFrameNumbers("ship_player"),
          frameRate: 10,
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

      //Animação asteroid
      this.anims.create({
        key: "asteroid_animation",
        frames: this.anims.generateFrameNumbers("asteroid"),
        frameRate: 15,
        repeat: -1,
        
      });
      
      
      this.ship1.play("ship_animation");
      this.ship1.setInteractive();
      this.ship1.destroyShip = this.destroyShip;
      this.input.on("gameobjectdown", this.destroyShip, this);
  
        
      
      this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"});
    };
    update(){
      this.aceleration_ship(this.ship1,1);
      
      
      
      
    };
    
    aceleration_ship(ship, speed){
      ship.y += speed; 
      if(ship.y > config.height){
        this.Reset_ship(ship)
      }
    };
    
    Reset_ship(ship){
      ship.y = 0;
      var aleatorizeX = Phaser.Math.Between(0, config.width);
      ship.x = aleatorizeX
    };
    
    destroyShip(pointer, gameObject){
      gameObject.setTexture("explosion");
      gameObject.play("explosion_animation");
    };
    
  }
  