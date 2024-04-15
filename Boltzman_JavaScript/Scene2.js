

class Scene2 extends Phaser.Scene{
    constructor(){
      super("playGame");
    }
  
    create(){
        this.background2 = this.add.tileSprite(0,0,config.width,config.height,"background2");
        this.background2.setPosition(100,100);
        this.background2.setScale(2);
        //this.ship = new Ship(400,400);


        //Adicionando as naves
        
  
        
        
        
        
        
        

        this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"});
    };
    update(){
      

      
    };
   
  }