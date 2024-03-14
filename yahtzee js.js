const dices = [0, 0, 0, 0, 0, 0];

var heldDice = [false, false, false, false, false];

var rollsLeft = 3;

const dicesValue = [die1,die2,die3,die4,die5];

var die1;
var die2;
var die3;
var die4;
var die5;

var diceFaces = [
  "javascript/images/dice 1.png",
  "javascript/images/dice 2.png",
  "javascript/images/dice 3.png",
  "javascript/images/dice 4.png",
  "javascript/images/dice 5.png",
  "javascript/images/dice 6.png",
];

function rollDice() {
  var total = document.getElementById("total");
  var yat = document.getElementById("yahtzee");

  if(!heldDice [0])var die1 = Math.floor(Math.random() * 6) +1;
  if(!heldDice [1])var die2 = Math.floor(Math.random() * 6) +1;
  if(!heldDice [2])var die3 = Math.floor(Math.random() * 6) +1;
  if(!heldDice [3])var die4 = Math.floor(Math.random() * 6) +1;
  if(!heldDice [4])var die5 = Math.floor(Math.random() * 6) +1;


  document.getElementById("dice1").src = `dice ${die1}.png`;
  document.getElementById("dice2").src = `dice ${die2}.png`;
  document.getElementById("dice3").src = `dice ${die3}.png`;
  document.getElementById("dice4").src = `dice ${die4}.png`;
  document.getElementById("dice5").src = `dice ${die5}.png`;


  var totaal =
    parseInt(die1) +
    parseInt(die2) +
    parseInt(die3) +
    parseInt(die4) +
    parseInt(die5);
  total = totaal;

  if (
    die1 == die2 &&
    die1 == die3 &&
    die1 == die4 &&
    die1 == die5
  ) {
    yat = "Yahtzee!";
  } else {
    yat = "No Yahtzee";
  }
  if (rollsLeft === 0) {
    alert("No more rolls left!");
    return;
  }
  // rest of the rollDice function

  rollsLeft--;
  document.getElementById("rollsLeft").innerHTML = "Rolls left: " + rollsLeft;

  // // dicesValue.length = 0;
  // dicesValue.push(die1.innerHTML, die2.innerHTML, die3.innerHTML, die4.innerHTML, die5.innerHTML);
  // console.log(dicesValue)
  
  const dicesValue = [die1,die2,die3,die4,die5];
  
  

  

  



  die1.innerHTML = document.getElementById("diceFaces");
   
  let img = document.getElementById("imgDice1");
img.src = "dice " + dicesValue[0] + ".png";
console.log("added image of " + die1.innerHTML);

  img.onclick = function() {
      console.log(diceFaces.value);
            
  };

  
}
function selectOnes(){
  function isOne(value){
      return value == 1;
          
  }
    const ones = dicesValue.filter(isOne);
    console.log(ones);
    var onesArray = ones.length;
    console.log(onesArray);
    
    // Get all elements with the class name 'onesID'
    var onesID = document.querySelectorAll('.onesID');
    
    // de enen knopen bijwerken
    onesID.forEach(button => {
        button.innerHTML = onesArray;
    });
  }

function selectTwos(){
  function isTwo(value){
      return value == 2;
        
  }
  const twos = dicesValue.filter(isTwo)
  console.log(twos);

  var twosArray = twos.length;
  console.log(twosArray);

  var twosID = document.querySelectorAll(".twosID");
  twosID.forEach(button => {
    button.innerHTML = twosArray;
  });
}

function selectThrees(){
  function isThree(value){
    return value == 3;
        
  }
  const threes = dicesValue.filter(isThree)
  console.log(threes);
  var threesArray = threes.length;
  console.log(threesArray);

  var threesID = document.querySelectorAll(".threesID");
  threesID.forEach(button => {
    button.innerHTML = threesArray;
  });
}

function selectFours(){
  function isFour(value){
      return value == 4;
        
  }
  const fours = dicesValue.filter(isFour)
  console.log(fours);
  var foursArray = fours.length;
  console.log(foursArray);

  var foursID = document.querySelectorAll(".foursID");
  foursID.forEach(button => {
    button.innerHTML = foursArray;
  });
}


function selectFives(){
  function isFive(value){
      return value == 5;
        
  }
  const fives = dicesValue.filter(isFive)
  console.log(fives);
  var fivesArray = fives.length;
  console.log(fivesArray);

  var fivesID = document.querySelectorAll(".fivesID");
  fivesID.forEach(button => {
    button.innerHTML = fivesArray;
  });
}

function selectSixs(){
  function isSix(value){
      return value == 6;
        
  }
  const sixs = dicesValue.filter(isSix)
  console.log(sixs);
  var sixsArray = sixs.length;
  console.log(sixsArray);

  var sixsID = document.querySelectorAll(".sixsID");
  sixsID.forEach(button => {
    button.innerHTML = sixsArray;
  });
}


function holdDie(dieNum, alisina) {
  heldDice[dieNum - 1] = !heldDice[dieNum - 1];

  die1.innerHTML = diceOne;
  die2.innerHTML = diceTwo;
  die3.innerHTML = diceThree;
  die4.innerHTML = diceFour;
  die5.innerHTML = diceFive;
}
