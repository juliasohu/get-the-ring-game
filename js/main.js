
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
  const goodObj = new GoodObstacle()
  goodObstaclesArr.push(goodObj)
}, 5000)

setInterval(() => {
  const badObj = new BadObstacle()
  badObstaclesArr.push(badObj)
}, 2000)

// SET TIMES FOR OBJECTS MOVEMENT GOOD vs BAD //
setInterval(() => {
  goodObstaclesArr.forEach((obstacle) => {
    obstacle.moveDown()
  })
}, 100)

setInterval(() => {
  badObstaclesArr.forEach((obstacle) => {
    obstacle.moveDown()
  })
}, 100)