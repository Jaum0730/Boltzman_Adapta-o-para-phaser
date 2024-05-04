
class Scene2 extends Phaser.Scene{
    constructor(){
      super("playGame");
      
    }
    create(){
      this.background2 = this.add.tileSprite(0,0,config.width,config.height,"background2");
      this.background2.setPosition(100,100);
      this.background2.setScale(2);

      
      
      //adicionando inimigos
      this.enemy1 = this.physics.add.sprite(config.width + 10, config.height, "alien");
        this.enemy2 = this.physics.add.sprite(config.width + 10, config.height, "alien2");
        this.enemy3 = this.physics.add.sprite(config.width + 50, config.height, "alien3");
        
        //criando grupo
        this.enemies =  this.physics.add.group();
        this.enemies.add(this.enemy1);
        this.enemies.add(this.enemy2);
        this.enemies.add(this.enemy3);
      //ajustando o tamanho
        this.enemy1.setScale(2);
        this.enemy2.setScale(2);
        this.enemy3.setScale(2);
      //Animação naves aliens
      this.enemy1.play("alien_anim");
        this.enemy2.play("alien_anim");
        this.enemy3.play("alien_anim");
      //Interação dos inimigos
        this.enemy1.setInteractive();
        this.enemy2.setInteractive();
        this.enemy3.setInteractive();
        
        //this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"});

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
        //colisores
        // interação player e alien
        this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this);
        
        this.physics.add.overlap(this.projectiles, this.enemies, this.hitEnemy, null, this);
        /*
        var graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 1);
        graphics.beginPath();
        graphics.moveTo(0, 0);
        graphics.lineTo(config.width, 0);
        graphics.lineTo(config.width, 20);
        graphics.lineTo(0, 20);
        graphics.lineTo(0, 0);
        graphics.closePath();
        graphics.fillPath();
        */
        
        var scoreFormated = this.zeroPad(currentScore, 6);
        this.scorePainel = this.add.bitmapText(10, 5, "pixelFont", "SCORE: " + scoreFormated, 32);


        
        
      };

      hurtPlayer(player, enemy){
        this.Reset_ship(enemy);
        player.x = config.width/2 - 8; 
        player.y = config.height - 64;
      };
  
      hitEnemy(projectile, enemy){
        projectile.destroy();
        this.Reset_ship(enemy);
        currentScore += 15;
        //add pontos
        var scoreFormated = this.zeroPad(currentScore, 6);
        this.scorePainel.text = "SCORE: " + scoreFormated
      };




      zeroPad(number, size){
        var stringNumber = String(number);
        while(stringNumber.length < (size || 2)){
          stringNumber = "0" + stringNumber;
        }
        return stringNumber;
    }

      update(){
      this.aceleration_ship(this.enemy3, 5);
      this.aceleration_ship(this.enemy2, 3);
      this.aceleration_ship(this.enemy1, 1);
    
      
      

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
  