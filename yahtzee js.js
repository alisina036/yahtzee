const diceThrow = [1,2,3,4,5];
let canThrow = [true,true,true,true,true];

let numbers = [1,5,1,5,1];

const dices = [0,0,0,0,0,0];

class Dice{
    constructor(){
        this.diceThrow = 1;
        this.canThrow = true;
    }

    roll(){
        if(this.canThrow){
            this.diceThrow = Math.floor(Math.random() * 6) + 1;
        }
    }
}

for(let i = 0; i < dices.length; i++){
    dices[i] = new Dice();
}
 
dices.forEach(dice => {
    dice.roll();
});


function diceHold(dice){
    dices[dice].canThrow = false;
    console.log(dices)
}

function viewDices(){
    console.log(dices)
}

var heldDice = [false, false, false, false, false];

var diceFaces = ["javascript/images/dice 1.png","javascript/images/dice 2.png",
"javascript/images/dice 3.png","javascript/images/dice 4.png",
"javascript/images/dice 5.png","javascript/images/dice 6.png",]

function rollDice() {
    var die1 = document.getElementById("dice1");
    var die2 = document.getElementById("dice2");
    var die3 = document.getElementById("dice3");
    var die4 = document.getElementById("dice4");
    var die5 = document.getElementById("dice5");
    var total = document.getElementById("total");
    var yat = document.getElementById("yahtzee");

    if (!heldDice[0]) die1.innerHTML = Math.floor(Math.random() * 6) + 1;
    if (!heldDice[1]) die2.innerHTML = Math.floor(Math.random() * 6) + 1;
    if (!heldDice[2]) die3.innerHTML = Math.floor(Math.random() * 6) + 1;
    if (!heldDice[3]) die4.innerHTML = Math.floor(Math.random() * 6) + 1;
    if (!heldDice[4]) die5.innerHTML = Math.floor(Math.random() * 6) + 1;

    var totaal = parseInt(die1.innerHTML) + parseInt(die2.innerHTML) + parseInt(die3.innerHTML) + parseInt(die4.innerHTML) + parseInt(die5.innerHTML);
    total.innerHTML = totaal;

    if (die1.innerHTML == die2.innerHTML && die1.innerHTML == die3.innerHTML && die1.innerHTML == die4.innerHTML && die1.innerHTML == die5.innerHTML) {
        yat.innerHTML = "Yahtzee!";
    } else {
        yat.innerHTML = "No Yahtzee";
    }
    if(die1 == 1){
        document.getElementById("dice1").src = diceFaces[0]
    }
    if (rollsLeft === 0) {
        alert("No more rolls left!");
        return;
    }
    // rest of the rollDice function

    rollsLeft--;
    document.getElementById("rollsLeft").innerHTML = "Rolls left: " + rollsLeft;
}

function holdDie(dieNum, ali) {
    heldDice[dieNum - 1] = !heldDice[dieNum - 1];

    die1.innerHTML = diceOne;
    die2.innerHTML = diceTwo;
    die3.innerHTML = diceThree;
    die4.innerHTML = diceFour;
    die5.innerHTML = diceFive;
}

