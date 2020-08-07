let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget=()=>{
  let target = Math.round(Math.random()*9);
  console.log(target);
  return target;
}

compareGuesses=(userGuess,compGuess,target)=>{
  let result = false;

  if(userGuess === target){
    result = true;
  } else if(compGuess===target){
    result = false;
    updateScore('computer');
  } else{
    let a = Math.abs(userGuess-target);
    let b = Math.abs(compGuess-target);
    if(a > b){
      result= false;
      updateScore('computer');
    }else {
      result =true;
      updateScore('human');
    }}
    return result;
}

var updateScore = (winner)=>{
  if(winner === 'human'){
    humanScore ++;
  } else{
    computerScore ++;
  }
 
}

var advanceRound = () => {
  currentRoundNumber ++;
}
/* testing
console.log(compareGuesses(5,8,generateTarget()));
console.log(computerScore,humanScore,currentRoundNumber);*?
