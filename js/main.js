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
setInterval(() => {
  const goodObj = new GoodObstacle();
  goodObstaclesArr.push(goodObj);
}, 5000);

/*setInterval(() => {
  const badObj = new BadObstacle();
  badObstaclesArr.push(badObj);
}, 2000);
*/
// SET TIMES FOR OBJECTS MOVEMENT & COLLISION DETECTION //

//  GOOD  //
setInterval(() => {
  goodObstaclesArr.forEach((obstacle) => {
    obstacle.moveDown();
    if (
      player1.positionX < obstacle.positionX + obstacle.width &&
      player1.positionX + player1.width > obstacle.positionX &&
      player1.positionY < obstacle.positionY + obstacle.height &&
      player1.positionY + player.height > obstacle.positionY
    ) {
      // Collision detected!
      console.log("game over my friend!");
      //location.href = "gameover.html"; //move to the gameover page
    }
  });
}, 10);

/*setInterval(() => {
  badObstaclesArr.forEach((obstacle) => {
    obstacle.moveDown();
  });
}, 100);
*/
