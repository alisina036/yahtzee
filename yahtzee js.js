let rollsLeft = 3;
let heldDice = [false, false, false, false, false];

// Store the dice values in an array
let diceValues = [0, 0, 0, 0, 0];

function rollDice() {
  if (rollsLeft === 0) {
    alert("No more turns left!");
    return;
  }

  for (let i = 0; i < heldDice.length; i++) {
    if (!heldDice[i]) {
      // Roll only if the dice is not held
      diceValues[i] = Math.floor(Math.random() * 6) + 1;
    }
  }

  // Update the dice images
  for (let i = 0; i < diceValues.length; i++) {
    document.getElementById("dice" + (i + 1)).src = "dice " + diceValues[i] + ".png";
  }

  rollsLeft--;
  document.getElementById("rollsLeft").textContent = "Rolls left: " + rollsLeft;

  // Update other functionalities based on the new dice values
  updateScore(); // Assuming you have a function to update the score based on diceValues
}

function holdDie(dieNum) {
  heldDice[dieNum - 1] = !heldDice[dieNum - 1];
}

// Example of updating score based on dice values
function updateScore() {
  let totalScore = 0;
  for (let i = 0; i < diceValues.length; i++) {
    totalScore += diceValues[i];
  }
  document.getElementById("total").textContent = "Total Score: " + totalScore;
}

// Example of filtering dice values to find ones
function selectOnesPlayer1() {
  let onesCountPlayer1 = diceValues.filter(value => value === 1).length;
  console.log("Number of ones: " + onesCountPlayer1);
  document.getElementById("onesPlayer1").textContent = onesCountPlayer1; 
  // You can update the HTML elements to display the count of ones as needed
}
function selectOnesPlayer2() {
  let onesCountPlayer2 = diceValues.filter(value => value === 1).length;
  document.getElementById("onesPlayer2").textContent = onesCountPlayer2; 
  console.log("Number of ones: " + onesCountPlayer2);
}
function selectTwosPlayer1() {
  let twosCountPlayer1 = diceValues.filter(value => value === 2).length;
  document.getElementById("twosPlayer1").textContent = twosCountPlayer1; 
  console.log("Number of Twos: " + twosCountPlayer1);
}
function selectTwosPlayer2() {
  let twosCountPlayer2 = diceValues.filter(value => value === 2).length;
  document.getElementById("twosPlayer2").textContent = twosCountPlayer2; 
  console.log("Number of Twos: " + twosCountPlayer2);
}
function selectThreesPlayer1() {
  let threesCountPlayer1 = diceValues.filter(value => value === 3).length;
  document.getElementById("threesPlayer1").textContent = threesCountPlayer1; 
  console.log("Number of threes: " + threesCountPlayer1);
}
function selectThreesPlayer2() {
  let threesCountPlayer2 = diceValues.filter(value => value === 3).length;
  document.getElementById("threesPlayer2").textContent = threesCountPlayer2; 
  console.log("Number of threes: " + threesCountPlayer2);
}
function selectFoursPlayer1() {
  let foursCountPlayer1 = diceValues.filter(value => value === 4).length;
  document.getElementById("foursPlayer1").textContent = foursCountPlayer1; 
  console.log("Number of fours: " + foursCountPlayer1);
}
function selectFoursPlayer2() {
  let foursCountPlayer2 = diceValues.filter(value => value === 4).length;
  document.getElementById("foursPlayer2").textContent = foursCountPlayer2; 
  console.log("Number of fours: " + foursCountPlayer2);
}
function selectFivesPlayer1() {
  let fivesCountPlayer1 = diceValues.filter(value => value === 5).length;
  document.getElementById("fivesPlayer1").textContent = fivesCountPlayer1;
  console.log("Number of fives: " + fivesCountPlayer1);
}
function selectFivesPlayer2() {
  let fivesCountPlayer2 = diceValues.filter(value => value === 5).length;
  document.getElementById("fivesPlayer2").textContent = fivesCountPlayer2;
  console.log("Number of fives: " + fivesCountPlayer2);
}
function selectSixesPlayer1() {
  let sixesCountPlayer1 = diceValues.filter(value => value === 6).length;
  document.getElementById("sixesPlayer1").textContent = sixesCountPlayer1;
  console.log("Number of sixes: " + sixesCountPlayer1);
}
function selectSixesPlayer2() {
  let sixesCountPlayer2 = diceValues.filter(value => value === 6).length;
  document.getElementById("sixesPlayer2").textContent = sixesCountPlayer2;
  console.log("Number of sixes: " + sixesCountPlayer2);
}

function switchPlayer(){
  rollsLeft = 3;
  document.getElementById("rollsLeft").textContent = "Rolls left: " + 3;
  for (let i = 0; i < diceValues.length; i++){
  document.getElementById("dice" + (i + 1)).src = "dice 1.png";
  }
  heldDice = [false, false, false, false, false];
}