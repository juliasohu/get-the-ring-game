// MAIN VARIABLES //
const goodObstaclesArr = [];
const badObstaclesArr = [];
let totalDiamond = 0;
let totalGold = 0;
const goalDiamond = 1;
const goalGold = 1;

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

// SCORE TRACKER ELEMENTS //
const scoreTracker = document.getElementById("score-tracker")

const counterDiamond = document.createElement("div")
counterDiamond.className = "counter-element"
const counterGold = document.createElement("div")
counterGold.className = "counter-element"
updateScoreTracker()

scoreTracker.appendChild(counterDiamond)
scoreTracker.appendChild(counterGold)


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
      playCollisionSound(obstacle.type);
      // Good collision action
      if (obstacle.type == "diamond") {
        totalDiamond++;
      } 
      else if (obstacle.type == "gold") {
        totalGold++;
      }
      updateScoreTracker()
      //remove obstacles so that counter only takes 1
      goodObstaclesArr.splice(index, 1);
      obstacle.obstacleElm.remove();
    }

    if (totalDiamond >= goalDiamond && totalGold >= goalGold) {
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
      playCollisionSound(obstacle.type)
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
  const types = ["diamond", "gold"];
  const randomType = types[Math.floor(Math.random() * types.length)];
  const goodObj = new GoodObstacle(randomType);
  return goodObj;
}

function playCollisionSound(obstacleType) {
  const goodAudio = new Audio('../audio/good-obstacle-sound.wav')
  const badAudio = new Audio('../audio/ouch.mp3')
  if (obstacleType == 'diamond' || obstacleType == 'gold') {
    goodAudio.play()
  }
  else if (obstacleType == 'bad') {
    badAudio.play()
  }
}

function updateScoreTracker(){
  counterDiamond.innerText = `${totalDiamond} / ${goalDiamond}`;
  counterGold.innerText = `${totalGold} / ${goalGold}`
}