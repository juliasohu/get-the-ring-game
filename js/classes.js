//ACCESSING THE BOARD ELEMENT //
const boardElement = document.getElementById("board");

// CREATION OF NEW CLASS *PLAYER* //

class Player {
    constructor() {
      this.width = 140;
      this.height = 140;
      this.positionX = 500 - this.width / 2;
      this.positionY = 672;
      this.stepSize = 10
  
      this.playerElm = document.getElementById("player");
      this.updateUI();
    }
  
    updateUI() {
      this.playerElm.style.width = this.width + "px";
      this.playerElm.style.height = this.height + "px";
      this.playerElm.style.left = this.positionX + "px";
      this.playerElm.style.top = this.positionY + "px";
    }
  
    moveLeft() {
      if(this.positionX > 0){
        this.positionX -= this.stepSize;
        this.updateUI();
      }
    }
  
    //TODO revisar el movimiento a la derecha que no se pase ni quede corto//
    moveRight() {
      const boardWidth = boardElement.clientWidth; //retrieving the width + calculating in vw
      const maxPositionX = boardWidth - this.width;
     
      if(this.positionX + this.stepSize <= maxPositionX){
        this.positionX += this.stepSize;
        this.updateUI();
      }
  }
  }
  
  //CREATION OF NEW CLASS OBSTACLE AND SUBCLASSES GOOD vs BAD//
  class Obstacle {
    constructor() {
    const boardWidth = boardElement.clientWidth
      this.width = 60;
      this.height = 60;
      this.positionX = Math.floor(Math.random() * (boardWidth - this.width))
      this.positionY = 0;
    }
  
    createObstacleHTML(){
      this.obstacleElm = document.createElement("div");
      this.obstacleElm.className = "obstacle"
      this.obstacleElm.style.width = this.width + "px";
      this.obstacleElm.style.height = this.height + "px";
      this.obstacleElm.style.left = this.positionX + "px";
      this.obstacleElm.style.top = this.positionY + "px";

      boardElement.appendChild(this.obstacleElm)
    }
  
    moveDown(){
        this.positionY+=1;
        this.obstacleElm.style.top = this.positionY + "px"
    }
  }

  class GoodObstacle extends Obstacle {
    constructor(type){
        super();
        this.createObstacleHTML();
        this.type = type;
        this.obstacleElm.className = `${type}-obstacle`
  }
}

  class BadObstacle extends Obstacle {
    constructor(){
        super();
        this.createObstacleHTML();
        this.type = 'bad'
        this.obstacleElm.className = "bad-obstacle"
    }
  }