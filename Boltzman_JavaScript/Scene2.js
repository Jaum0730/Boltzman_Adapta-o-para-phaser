
class Scene2 extends Phaser.Scene{
    constructor(){
      super("playGame");
      
    }
    create(){
      this.background2 = this.add.tileSprite(0,0,config.width,config.height,"background2");
      this.background2.setPosition(100,100);
      this.background2.setScale(2);
  
      //Logica para nave do jogador
        this.player = this.physics.add.sprite(config.width/2+50, config.height/2, "ship_player");
        this.player.setScale(2);
        //Animação das naves
        this.player.play("ship_animation");
        //setando controles da nave
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        //setando os colisores
        this.player.setCollideWorldBounds(true);
        //botão para disparos
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      
      
      
      this.player.setInteractive();
      this.player.destroyShip = this.destroyShip;
      this.input.on("gameobjectdown", this.destroyShip, this);
  
        
      
      this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"});
    };
    update(){
      //função para mover inimigos
      //this.aceleration_ship(this.player,0);

      this.movePlayer();
      
      
      
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

    movePlayer(){
      if(this.cursorKeys.left.isDown){
          this.player.setVelocityX(-gameSettings.playerSpeed);
        }
        else if(this.cursorKeys.right.isDown){
          this.player.setVelocityX(gameSettings.playerSpeed);
          
        }

      if(this.cursorKeys.up.isDown){
        this.player.setVelocityY(-gameSettings.playerSpeed);

      }
      else if (this.cursorKeys.down.isDown){
        this.player.setVelocityY(gameSettings.playerSpeed);

      }

      if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
        console.log("Fogo!!!");
      }




    }
    
  }
  