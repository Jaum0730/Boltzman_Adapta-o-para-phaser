class Menu extends Phaser.Scene{
    constructor(){
        super("Menu");
    }
    preload(){
        


    }



    create(){
    


        //=================================Botões do Menu================================//
        this.playButton = this.add.text(this.game.renderer.width / 2, 300, 'PLAY', { font:'37px Orbitron', fill: '#f7f2ad' })
        .setOrigin(0.5).setInteractive();  
        
        this.infoButton = this.add.text(this.game.renderer.width / 2, 350, '{OPTIONS}', { font: '18px Orbitron', fill: '#f7f2ad' })
            .setOrigin(0.5).setInteractive();
            
        this.creditsButton = this.add.text(this.game.renderer.width / 2, 390, '{CREDITOS}', { font: '18px Orbitron', fill: '#f7f2ad' })
            .setOrigin(0.5).setInteractive();

        //=================================Colorir Botões do Menu================================//


        this.input.on('gameobjectover', function (pointer, gameObject) {
                gameObject.setTintFill(0xcf70cf);
            });
        this.input.on('gameobjectout', function (pointer, gameObject) {
                gameObject.clearTint();
            });
        
        //=================================Pontuação================================//


        this.txtHighScore = this.add.text(this.game.renderer.width / 2, 430, '->>> RECORDE:'+ highScore +' <<<-', { font: '20px Orbitron', fill: '#f7f2ad' })
        .setOrigin(0.5);
        this.txtHighScore.setTintFill(0xf7f2ad, 0xf7f2ad, 0xbf40bf, 0xbf40bf);
        this.playButton.once('pointerdown', function () {
            this.playButton.setTintFill(0xcf70cf);
            this.time.addEvent({delay: 1000, callback: this.startGame, callbackScope: this, loop: false});
        }, this);


        

        
    }

    startGame(){
        this.scene.start('bootGame');
    }
}
var highScore = 0;
var currentScore = 0;
