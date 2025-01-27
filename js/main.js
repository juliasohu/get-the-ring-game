const goodObstaclesArr = [];
const badObstaclesArr = [];

// Creating Player 1
let player1 = new Player();

// ADDED EVENT LISTENERS FOR PLAYER MOVEMENT //

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    player1.moveLeft();
  } else if (event.code === "ArrowRight") {
    player1.moveRight();
  }
});

// SET TIMES FOR OBJECTS CREATION GOOD vs BAD//
const goodObjCreation = setInterval(() => {
  const goodObj = new GoodObstacle();
  goodObstaclesArr.push(goodObj);
}, 5000);

const badObjCreation = setInterval(() => {
  const badObj = new BadObstacle();
  badObstaclesArr.push(badObj);
}, 2000);

// SET TIMES FOR OBJECTS MOVEMENT & COLLISION DETECTION //

//  GOOD  //
const goodObjMovement = setInterval(() => {
  goodObstaclesArr.forEach((obstacle) => {
    obstacle.moveDown();
  // console.log("good obstacle", obstacle.positionX, obstacle.positionY)
  // console.log("good player", player1.positionX, player1.positionY)

    if (
      player1.positionX < obstacle.positionX + obstacle.width &&
      player1.positionX + player1.width > obstacle.positionX &&
      player1.positionY < obstacle.positionY + obstacle.height &&
      player1.positionY + player1.height > obstacle.positionY
    ) {
      // TODO Good collision action
      console.log("COLLISION DETECTED");
      //location.href = "gameover.html"; //move to the gameover page
    }
  });
}, 10);

const badObjMovement = setInterval(() => {
  badObstaclesArr.forEach((obstacle) => {
    obstacle.moveDown();
    if (
      player1.positionX < obstacle.positionX + obstacle.width &&
      player1.positionX + player1.width > obstacle.positionX &&
      player1.positionY < obstacle.positionY + obstacle.height &&
      player1.positionY + player1.height > obstacle.positionY
    ) {
      // TODO
      console.log("COLLISION DETECTED");
      stopGame()
      window.location.href = "../screens/game-over.html"
    }
  });
}, 10);

function stopGame(){
  clearInterval(badObjMovement)
  clearInterval(badObjCreation)
  clearInterval(goodObjCreation)
  clearInterval(goodObjMovement)
}