if (a == "ROCK" && b == "SCISSORS"){
    console.log("You lose, rock blunts scissors")
  }
  else if (a == "SCISSORS" && b=="PAPER"){
    console.log("You lose, scissors cuts paper")
  }
  else if ( a== "PAPER" && b == "ROCK"){
    console.log("You lost, paper wraps rock")
  }
  else if (a == "SCISSORS" && b == "ROCK"){
    console.log("You win, rock blunts scissors")
  }
  else if (a == "PAPER" && b == "SCISSORS"){
    console.log("You win, scissors cuts paper")
  }
  else if ( a== "ROCK" && b == "PAPER"){
    console.log("You win, paper wraps rock")
  }
  else if (a == b){
    console.log("Draw")
  }