
const obstaclesArray = [];

// Creating Player 1
let player1 = new Player();

let good1 = new GoodObstacle();
let bad1 = new BadObstacle();

// ADDED EVENT LISTENERS FOR PLAYER MOVEMENT //

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    player1.moveLeft();
  } else if (event.code === "ArrowRight") {
    player1.moveRight();
  }
});

// SET TIMES FOR OBJECTS FALLING //
