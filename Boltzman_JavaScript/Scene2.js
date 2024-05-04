
class Scene2 extends Phaser.Scene{
    constructor(){
      super("playGame");
      
    }
    create(){
      this.background2 = this.add.tileSprite(0,0,config.width,config.height,"background2");
      this.background2.setPosition(100,100);
      this.background2.setScale(2);

      //adicionando inimigos
        this.ship1 = this.physics.add.sprite(config.width + 10, config.height, "alien");
        this.ship2 = this.physics.add.sprite(config.width + 10, config.height, "alien");
        this.ship3 = this.physics.add.sprite(config.width + 50, config.height, "alien");
      //ajustando o tamanho
        this.ship1.setScale(2);
        this.ship2.setScale(2);
        this.ship3.setScale(2);
      //Animação naves aliens
        this.ship1.play("alien_anim");
        this.ship2.play("alien_anim");
        this.ship3.play("alien_anim");

      //Interação dos inimigos

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
        //grupo com os projteis
        this.projectiles = this.add.group();
      
      
      
      this.player.setInteractive();
      this.player.destroyShip = this.destroyShip;
      this.input.on("gameobjectdown", this.destroyShip, this);
  
        
      
      this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"});
    };
    update(){
      this.aceleration_ship(this.ship1, 5);
      this.aceleration_ship(this.ship2, 3);
      this.aceleration_ship(this.ship3, 1);
    
      
      

      this.movePlayer();

      for(var i = 0; i < this.projectiles.getChildren().length; i++){
        var beam = this.projectiles.getChildren()[i];
        beam.update();

      }
      
      
      
      
      
    };
    
    Laser_Shot(){
      var beam = new Beam(this);
      beam.setScale(2);
      
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
          console.log("fogo!");
          this.Laser_Shot();
        }
        
      };

    
  }
  