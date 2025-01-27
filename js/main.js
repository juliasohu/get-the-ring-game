// MAIN VARIABLES //
const goodObstaclesArr = [];
const badObstaclesArr = [];
let totalSilver = 0;
let totalGold = 0;
const goalSilver = 6;
const goalGold = 4;

// Creating Player 1
let player1 = new Player();

// ADD EVENT LISTENERS FOR PLAYER MOVEMENT //

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    player1.moveLeft();
  } else if (event.code === "ArrowRight") {
    player1.moveRight();
  }
});

// ADD COUNTER TO DOM

/*TODO CREATE COUNTER ELEMENTS IN VIEW const counterBlock = document.createElement("ul")
document */

// SET TIMES FOR OBJECTS CREATION GOOD vs BAD//
const goodObjCreation = setInterval(() => {
  goodObstaclesArr.push(createRandomGoodObstacle());
}, 5000);

const badObjCreation = setInterval(() => {
  const badObj = new BadObstacle();
  badObstaclesArr.push(badObj);
}, 2000);

// SET TIMES, MOVEMENT & COLLISION DETECTION FOR OBSTACLES //

//  GOOD  //
const goodObjMovement = setInterval(() => {
  goodObstaclesArr.forEach((obstacle, index) => {
    obstacle.moveDown();

    if (
      player1.positionX < obstacle.positionX + obstacle.width &&
      player1.positionX + player1.width > obstacle.positionX &&
      player1.positionY < obstacle.positionY + obstacle.height &&
      player1.positionY + player1.height > obstacle.positionY
    ) {
      // TODO Good collision action
      if (obstacle.type == "silver") {
        totalSilver++;
        console.log("total Silver" + totalSilver);
      } else if (obstacle.type == "gold") {
        totalGold++;
        console.log("total Gold" + totalGold);
      }
      goodObstaclesArr.splice(index, 1);
      obstacle.obstacleElm.remove();
      //console.log(`${obstacle.type}`);
    }

    if (totalSilver >= goalSilver && totalGold >= goalGold) {
      stopGame();
      window.location.href = "../screens/winner.html";
    }
  });
}, 10);

// BAD //

const badObjMovement = setInterval(() => {
  badObstaclesArr.forEach((obstacle) => {
    obstacle.moveDown();
    if (
      player1.positionX < obstacle.positionX + obstacle.width &&
      player1.positionX + player1.width > obstacle.positionX &&
      player1.positionY < obstacle.positionY + obstacle.height &&
      player1.positionY + player1.height > obstacle.positionY
    ) {
      stopGame();
      window.location.href = "../screens/game-over.html";
    }
  });
}, 10);

// FUNCTIONS //

function stopGame() {
  clearInterval(badObjMovement);
  clearInterval(badObjCreation);
  clearInterval(goodObjCreation);
  clearInterval(goodObjMovement);
}

function createRandomGoodObstacle() {
  const types = ["silver", "gold"];
  const randomType = types[Math.floor(Math.random() * types.length)];
  const goodObj = new GoodObstacle(randomType);
  return goodObj;
}
