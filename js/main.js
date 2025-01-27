// CREATION OF NEW CLASS *PLAYER* AND *OBSTACLE* //

class Player {
    constructor() {
      this.width = 20;
      this.height = 10;
      this.positionX = 50 - (this.width / 2);
      this.positionY = 0;
  
      this.playerElm = document.getElementById("player");
      this.updateUI();
    }
}

class Obstacle {
    constructor() {
      this.width = 20;
      this.height = 10;
      this.positionX = 50 - (this.width / 2);
      this.positionY = 0;
  
      this.obstackeElm = document.getElementById("obstacle");
      this.updateUI();
    }
}
  
    // ADDING DINAMIC POSITIONING/STYLING ACCORDING TO CLASS //