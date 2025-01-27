// CREATION OF NEW CLASS *PLAYER* //

class Player {
    constructor() {
      this.width = 100;
      this.height = 100;
      this.positionX = 90 - this.width / 2;
      this.positionY = 78;
  
      this.playerElm = document.getElementById("player");
      this.updateUI();
    }
  
    updateUI() {
      this.playerElm.style.width = this.width + "px";
      this.playerElm.style.height = this.height + "px";
      this.playerElm.style.left = this.positionX + "vw";
      this.playerElm.style.top = this.positionY + "vh";
    }
  
    moveLeft() {
      if(this.positionX > 0){
        this.positionX -= 2;
        this.updateUI();
      }
    }
  
    //TODO revisar el movimiento a la derecha que no se pase//
    moveRight() {
      const boardWith = (boardElement.clientWidth / window.innerWidth) * 100; //retrieving the width + calculating in vw
      const playerWidth = (this.width / window.innerWidth) * 100;
      const maxPositionX = boardWith - playerWidth;
     
      if(this.positionX < maxPositionX){
      this.positionX += 2;
      this.updateUI();
    }
  }
  }
  
  //CREATION OF NEW CLASS OBSTACLE AND SUBCLASSES GOOD vs BAD//
  class Obstacle {
    constructor() {
      this.width = 20;
      this.height = 10;
      this.positionX = 50 - this.width / 2;
      this.positionY = 0;
    }
  
    createObstacleHTML(){
      this.obstacleElm = document.createElement("div");
  
      this.obstacleElm.className = "obstacle"
    }
  
    moveDown(){}
  }

  class GoodObstacle extends Obstacle {
    constructor(){
        super();
        this.createObstacleHTML();
        this.obstacleElm.className = "good-obstacle"
    }
  }

  class BaddObstacle extends Obstacle {
    constructor(){
        super();
        this.createObstacleHTML();
        this.obstacleElm.className = "bad-obstacle"
    }
  }