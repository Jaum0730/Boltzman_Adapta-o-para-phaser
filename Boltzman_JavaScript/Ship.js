class Ship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y);
      scene.add.existing(x / 2 - 50,y / 2, "ship");

      
      /*
      // Tornando o objeto "nave" interativo
      this.setInteractive();
      this.on('pointerdown', this.destroyShip, scene, this);
  
      // Criando a animação da nave
      scene.anims.create({
        key: 'ship_animation',
        frames: scene.anims.generateFrameNumbers('ship'),
        frameRate: 10,
        repeat: -1
      });
      this.play('ship_animation');
    }*/}
    /*
  
    destroyShip() {
      // Animando a explosão
      this.scene.anims.create({
        key: 'explosion_animation',
        frames: this.scene.anims.generateFrameNumbers('explosion'),
        frameRate: 10,
        repeat: 0,
        hideOnComplete: true
      });
      this.play('explosion_animation');
    }
  
    update(speed) {
      this.y += speed;
      if (this.y > this.scene.scale.height) {
        this.resetPosition();
      }
    }
  
    resetPosition() {
      this.y = 0;
      this.x = Phaser.Math.Between(0, this.scene.scale.width);
    }*/
  }
  
  