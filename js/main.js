//ACCESSING THE BOARD ELEMENT //
const boardElement = document.getElementById("board");

// CREATION OF NEW CLASS *PLAYER* AND *OBSTACLE* //

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
   
    if(this.positionX < maxPositionX - this.width){
    this.positionX += 2;
    this.updateUI();
  }
}
}

class Obstacle {
  constructor() {
    this.width = 20;
    this.height = 10;
    this.positionX = 50 - this.width / 2;
    this.positionY = 0;

    //this.updateUI();
  }
}

let player1 = new Player();
//let obstacle1 = new Obstacle

// ADDED EVENT LISTENERS FOR PLAYER MOVEMENT //

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    player1.moveLeft();
  } else if (event.code === "ArrowRight") {
    player1.moveRight();
  }
});
