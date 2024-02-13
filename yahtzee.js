const diceThrow = [1,2,3,4,5];
let canThrow = [true,true,true,true,true];

function diceRoll(dice){
    if(dice < 0 || dice > 4){
        return;
    }
    if(canThrow[dice]){
        diceThrow[dice] = math.floor(math.random() * 6) + 1;
    }
}