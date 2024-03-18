let rollsLeft = 3;
let heldDice = [false, false, false, false, false];

// Store the dice values in an array
let diceValues = [0, 0, 0, 0, 0];

var totalScorePlayer1;

let onesCountPlayer1 = 0;
let twosCountPlayer1 = 0;
let threesCountPlayer1 = 0;
let foursCountPlayer1 = 0;
let fivesCountPlayer1 = 0;
let sixesCountPlayer1 = 0;

let onesCountPlayer2 = 0;
let twosCountPlayer2 = 0;
let threesCountPlayer2 = 0;
let foursCountPlayer2 = 0;
let fivesCountPlayer2 = 0;
let sixesCountPlayer2 = 0;

var threeOfAKindTotalPlayer1 = 0;
var fourOfAKindTotalPlayer1 = 0;
var fullHouseTotalPlayer1 = 0;
var largeStraightTotalPlayer1 = 0
var smallStraightTotalPlayer1 = 0
var yahtzeeScorePlayer1 = 0;

var threeOfAKindTotalPlayer2 = 0;
var fourOfAKindTotalPlayer2 = 0;
var fullHouseTotalPlayer2 = 0;
var largeStraightTotalPlayer2 = 0
var smallStraightTotalPlayer2 = 0
var yahtzeeScorePlayer2 = 0;

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
  onesCountPlayer1 = diceValues.filter(value => value === 1).length;
  console.log("Number of ones: " + onesCountPlayer1);
  document.getElementById("onesPlayer1").textContent = onesCountPlayer1; 
  return onesCountPlayer1;
  // You can update the HTML elements to display the count of ones as needed
}
function selectOnesPlayer2() {
  onesCountPlayer2 = diceValues.filter(value => value === 1).length;
  document.getElementById("onesPlayer2").textContent = onesCountPlayer2; 
  console.log("Number of ones: " + onesCountPlayer2);
}
function selectTwosPlayer1() {
  twosCountPlayer1 = diceValues.filter(value => value === 2).length;
  document.getElementById("twosPlayer1").textContent = twosCountPlayer1 * 2; 
  console.log("Number of Twos: " + twosCountPlayer1);
}
function selectTwosPlayer2() {
  twosCountPlayer2 = diceValues.filter(value => value === 2).length;
  document.getElementById("twosPlayer2").textContent = twosCountPlayer2 * 2; 
  console.log("Number of Twos: " + twosCountPlayer2);
}
function selectThreesPlayer1() {
  threesCountPlayer1 = diceValues.filter(value => value === 3).length;
  document.getElementById("threesPlayer1").textContent = threesCountPlayer1 * 3; 
  console.log("Number of threes: " + threesCountPlayer1);
}
function selectThreesPlayer2() {
  threesCountPlayer2 = diceValues.filter(value => value === 3).length;
  document.getElementById("threesPlayer2").textContent = threesCountPlayer2 * 3; 
  console.log("Number of threes: " + threesCountPlayer2);
}
function selectFoursPlayer1() {
  foursCountPlayer1 = diceValues.filter(value => value === 4).length;
  document.getElementById("foursPlayer1").textContent = foursCountPlayer1 * 4; 
  console.log("Number of fours: " + foursCountPlayer1);
}
function selectFoursPlayer2() {
  foursCountPlayer2 = diceValues.filter(value => value === 4).length;
  document.getElementById("foursPlayer2").textContent = foursCountPlayer2 * 4; 
  console.log("Number of fours: " + foursCountPlayer2);
}
function selectFivesPlayer1() {
  fivesCountPlayer1 = diceValues.filter(value => value === 5).length;
  document.getElementById("fivesPlayer1").textContent = fivesCountPlayer1 * 5;
  console.log("Number of fives: " + fivesCountPlayer1);
}
function selectFivesPlayer2() {
  fivesCountPlayer2 = diceValues.filter(value => value === 5).length;
  document.getElementById("fivesPlayer2").textContent = fivesCountPlayer2 * 5;
  console.log("Number of fives: " + fivesCountPlayer2);
}
function selectSixesPlayer1() {
  sixesCountPlayer1 = diceValues.filter(value => value === 6).length;
  document.getElementById("sixesPlayer1").textContent = sixesCountPlayer1 * 6;
  console.log("Number of sixes: " + sixesCountPlayer1);
}
function selectSixesPlayer2() {
  sixesCountPlayer2 = diceValues.filter(value => value === 6).length;
  document.getElementById("sixesPlayer2").textContent = sixesCountPlayer2 * 6;
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

function threeOfAKindPlayer1() {
  
  const counts = Array.from({ length: 6 }, () => 0); // Array to count occurrences of each number
  for (const value of diceValues) {
    counts[value - 1]++; // Increment count for the corresponding number
  }
  for (let i = 0; i < 6; i++) {
    if (counts[i] == 3) {
      threeOfAKindTotalPlayer1 = diceValues[0] + diceValues[1] + diceValues[2] + diceValues[3] + diceValues[4];
      document.getElementById("threeOfaKindPlayer1").textContent = threeOfAKindTotalPlayer1;
      return true; // Found three of a kind
    }
  }
  document.getElementById("threeOfaKindPlayer1").textContent = "No Three of a Kind";
  return false; // No three of a kind found
}

function threeOfAKindPlayer2() {
  const counts = Array.from({ length: 6 }, () => 0);
  for (const value of diceValues) {
    counts[value - 1]++;
  }
  for (let i = 0; i < 6; i++) {
    if (counts[i] == 3) {
      threeOfAKindTotalPlayer2 = diceValues[0] + diceValues[1] + diceValues[2] + diceValues[3] + diceValues[4];
      document.getElementById("threeOfaKindPlayer2").textContent = threeOfAKindTotalPlayer2;
      return true;
    }
  }
  document.getElementById("threeOfaKindPlayer2").textContent = "No Three of a Kind!";
  return false;
}

function fourOfAKindPlayer1() {
  
  const counts = Array.from({ length: 6 }, () => 0); // Array to count occurrences of each number
  for (const value of diceValues) {
    counts[value - 1]++; // Increment count for the corresponding number
  }
  for (let i = 0; i < 6; i++) {
    if (counts[i] == 4) {
      fourOfAKindTotalPlayer1 = diceValues[0] + diceValues[1] + diceValues[2] + diceValues[3] + diceValues[4];
      document.getElementById("fourOfaKindPlayer1").textContent = fourOfAKindTotalPlayer1;
      return true; // Found four of a kind
    }
  }
  document.getElementById("fourOfaKindPlayer1").textContent = " No Four of a Kind!";
  // document.getElementById("fourOfaKind").textContent = "No Four of a Kind";
  return false; // No four of a kind found
}
function fourOfAKindPlayer2() {
  const counts = Array.from({ length: 6 }, () => 0);
  for (const value of diceValues) {
    counts[value - 1]++;
  }
  for (let i = 0; i < 6; i++) {
    if (counts[i] == 4) {
      fourOfAKindTotalPlayer2 = diceValues[0] + diceValues[1] + diceValues[2] + diceValues[3] + diceValues[4];
      document.getElementById("fourOfaKindPlayer2").textContent = fourOfAKindTotalPlayer2;
      return true;
    }
  }
  document.getElementById("fourOfaKindPlayer2").textContent = " No Four of a Kind!";
  // document.getElementById("fourOfaKind").textContent = "No Four of a Kind";
  return false; // No four of a kind found
}


function fullHousePlayer1() {
  const counts = Array.from({ length: 6 }, () => 0); // Array to count occurrences of each number
  for (const value of diceValues) {
    counts[value - 1]++; // Increment count for the corresponding number
  }
  let hasThree = false;
  let hasTwo = false;
  for (let i = 0; i < 6; i++) {
    if (counts[i] === 3) {
      hasThree = true;
    } else if (counts[i] === 2) {
      hasTwo = true;
    }
  }
  if (hasThree && hasTwo) {
    fullHouseTotalPlayer1 = 25;
    document.getElementById("fullHousePlayer1").textContent = fullHouseTotalPlayer1;
    return true; // Found a full house
  } else {
    document.getElementById("fullHousePlayer1").textContent = "No Full House";
    return false; // No full house found
  }
}
function fullHousePlayer2() {
  const counts = Array.from({ length: 6 }, () => 0); // Array to count occurrences of each number
  for (const value of diceValues) {
    counts[value - 1]++; // Increment count for the corresponding number
  }
  let hasThree = false;
  let hasTwo = false;
  for (let i = 0; i < 6; i++) {
    if (counts[i] === 3) {
      hasThree = true;
    } else if (counts[i] === 2) {
      hasTwo = true;
    }
  }
  if (hasThree && hasTwo) {
    document.getElementById("fullHousePlayer2").textContent = "Full House!";
    return true; // Found a full house
  } else {
    document.getElementById("fullHousePlayer2").textContent = "No Full House";
    return false; // No full house found
  }
}


function largeStraightPlayer1() {
  const sortedDiceValues = diceValues.slice().sort((a, b) => a - b);
  for (let i = 0; i < sortedDiceValues.length - 1; i++) {
    if (sortedDiceValues[i] + 1 !== sortedDiceValues[i + 1]) {
      document.getElementById("largeStraightPlayer1").textContent = "No Large Straight";
      return false; // Not a large straight
    }
  }
  document.getElementById("largeStraightPlayer1").textContent = largeStraightTotalPlayer1;
  largeStraightTotalPlayer1 = 40;
  return true; // Found a large straight
}

function largeStraightPlayer2() {
  const sortedDiceValues = diceValues.slice().sort((a, b) => a - b);
  for (let i = 0; i < sortedDiceValues.length - 1; i++) {
    if (sortedDiceValues[i] + 1 !== sortedDiceValues[i + 1]) {
      document.getElementById("largeStraightPlayer2").textContent = "No Large Straight";
      return false; // Not a large straight
    }
  }
  document.getElementById("largeStraightPlayer2").textContent = largeStraightTotalPlayer2;
  largeStraightTotalPlayer2 = 40;
  return true; // Found a large straight
}

function smallStraightPlayer1() {
  const sortedDiceValues = diceValues.slice().sort((a, b) => a - b);
  for (let i = 0; i < sortedDiceValues.length - 2; i++) {
    if (sortedDiceValues[i] + 1 === sortedDiceValues[i + 1] &&
        sortedDiceValues[i + 1] + 1 === sortedDiceValues[i + 2]) {
        smallStraightTotalPlayer1 = 30;
      document.getElementById("smallStraightPlayer1").textContent = smallStraightTotalPlayer1;
      return true; // Found a small straight
    }
  }
  document.getElementById("smallStraightPlayer1").textContent = "No Small Straight";
  return false; // Not a small straight
}
function smallStraightPlayer2() {
  const sortedDiceValues = diceValues.slice().sort((a, b) => a - b);
  for (let i = 0; i < sortedDiceValues.length - 2; i++) {
    if (sortedDiceValues[i] + 1 === sortedDiceValues[i + 1] &&
        sortedDiceValues[i + 1] + 1 === sortedDiceValues[i + 2]) {
          smallStraightTotalPlayer2 = 30;
          document.getElementById("smallStraightPlayer2").textContent = smallStraightTotalPlayer2;
      return true; 
    }
  }
  document.getElementById("smallStraightPlayer2").textContent = "No Small Straight";
  return false; 
}

function yahtzeePlayer1() {
  const counts = Array.from({ length: 6 }, () => 0); // Array to count occurrences of each number
  for (const value of diceValues) {
    counts[value - 1]++; // Increment count for the corresponding number
  }
  for (let i = 0; i < 6; i++) {
    if (counts[i] === 5) {
      yahtzeeScorePlayer1 = 50;
      document.getElementById("yahtzeePlayer1").textContent = yahtzeeScorePlayer1;
      return true; 
    }
  }
  document.getElementById("yahtzeePlayer1").textContent = "No Yahtzee";
  return false; 
}
function yahtzeePlayer2() {
  const counts = Array.from({ length: 6 }, () => 0); 
  for (const value of diceValues) {
    counts[value - 1]++; 
  }
  for (let i = 0; i < 6; i++) {
    if (counts[i] === 5) {
      yahtzeeScorePlayer2 = 50;
      document.getElementById("yahtzeePlayer2").textContent = yahtzeeScorePlayer2;
      return true; 
    }
  }
  document.getElementById("yahtzeePlayer2").textContent = "No Yahtzee";
  return false; 
}

function totalPlayer1(){
  totalScorePlayer1 = (onesCountPlayer1 * 1) + (twosCountPlayer1 * 2) + (threesCountPlayer1 * 3) + (foursCountPlayer1 * 4) + (fivesCountPlayer1 * 5) + (sixesCountPlayer1 * 6 + threeOfAKindTotalPlayer1 + fourOfAKindTotalPlayer1 + yahtzeeScorePlayer1 + fullHouseTotalPlayer1 + smallStraightTotalPlayer1 + largeStraightTotalPlayer1);
  document.getElementById("totalPlayer1").textContent = totalScorePlayer1;
}

function totalPlayer2(){
  totalScorePlayer2 = (onesCountPlayer2 * 1) + (twosCountPlayer2 * 2) + (threesCountPlayer2 * 3) + (foursCountPlayer2 * 4) + (fivesCountPlayer2 * 5) + (sixesCountPlayer2 * 6 + threeOfAKindTotalPlayer2 + fourOfAKindTotalPlayer2 + yahtzeeScorePlayer2 + fullHouseTotalPlayer2 + smallStraightTotalPlayer2 + largeStraightTotalPlayer2);
  document.getElementById("totalPlayer2").textContent = totalScorePlayer2;
}