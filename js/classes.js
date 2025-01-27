//ACCESSING THE BOARD ELEMENT //
const boardElement = document.getElementById("board");

// CREATION OF NEW CLASS *PLAYER* //

class Player {
    constructor() {
      this.width = 100;
      this.height = 100;
      this.positionX = 90 - this.width / 2;
      this.positionY = 78;
      this.stepSize = 2
  
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
        this.positionX -= this.stepSize;
        this.updateUI();
      }
    }
  
    //TODO revisar el movimiento a la derecha que no se pase ni quede corto//
    moveRight() {
      const boardWith = (boardElement.clientWidth / window.innerWidth) * 100; //retrieving the width + calculating in vw
      const playerWidth = (this.width / window.innerWidth) * 100;
      const maxPositionX = boardWith - playerWidth;
     
      if(this.positionX + this.stepSize <= maxPositionX){
        this.positionX += this.stepSize;
        this.updateUI();
      }
  }
  }
  
  //CREATION OF NEW CLASS OBSTACLE AND SUBCLASSES GOOD vs BAD//
  class Obstacle {
    constructor() {
    const boardWith = (boardElement.clientWidth / window.innerWidth) * 100;
      this.width = 60;
      this.height = 60;
      this.positionX = Math.floor(Math.random() * (boardWith - (this.width / window.innerWidth * 100)))
      this.positionY = 0;
    }
  
    createObstacleHTML(){
      this.obstacleElm = document.createElement("div");
      this.obstacleElm.className = "obstacle"
      this.obstacleElm.style.width = this.width + "px";
      this.obstacleElm.style.height = this.height + "px";
      this.obstacleElm.style.left = this.positionX + "vw";
      this.obstacleElm.style.top = this.positionY + "vh";

      boardElement.appendChild(this.obstacleElm)
    }
  
    moveDown(){
        this.positionY++;
        this.obstacleElm.style.top = this.positionY + "vh"
    }
  }

  class GoodObstacle extends Obstacle {
    constructor(){
        super();
        this.createObstacleHTML();
        this.obstacleElm.className = "good-obstacle"
    }
  }

  class BadObstacle extends Obstacle {
    constructor(){
        super();
        this.createObstacleHTML();
        this.obstacleElm.className = "bad-obstacle"
    }
  }