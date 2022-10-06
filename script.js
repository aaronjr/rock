document.addEventListener('DOMContentLoaded', function() {

  // initialise scores
  var win = 0
  var lose = 0
  var drew = 0
  var played = 0

  // get scoreboard items
  var won = document.querySelector(".won")
  var lost = document.querySelector(".lost")
  var draw = document.querySelector(".draw")
  var games = document.querySelector(".games")

  start()
  
  // start funtion asks user for input
  function start(){
    document.querySelector("#options").className = "options"
    myNode = document.querySelector("#options")
    while(myNode.firstChild){
      myNode.removeChild(myNode.lastChild)
    }
    rock = document.createElement("img")
    rock.className = ""
    rock.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/rock.png"
    rock.setAttribute('value', "ROCK")
    rock.setAttribute("id", "ops")
    paper = document.createElement("img")
    paper.setAttribute("id", "ops")
    paper.setAttribute('value', "PAPER")
    paper.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/paper.png"
    scissors = document.createElement("img")
    scissors.className = ""
    scissors.setAttribute("id", "ops")
    scissors.setAttribute('value', "SCISSORS")
    scissors.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/scissors.png"
    
    div1 = document.createElement("div")
    div1.className = " ops "
    div2 = document.createElement("div")
    div2.className = " ops "
    div3 = document.createElement("div")
    div3.className = " ops "

    // add options to page 
    myNode.append(div1)
    myNode.append(div2)
    myNode.append(div3)

    div1.append(rock)
    div2.append(paper)
    div3.append(scissors)


    options = document.querySelectorAll("#ops")
    options.forEach(function(element){
        // add listener to each of the 3 choices
        element.addEventListener("click", function(){
          // the value from their choice
          const user = element.getAttribute("value")
          // src from their choice
          const link = element.src
          // hide options
          document.querySelector("#options").className = "hidden"
          // call the game and pass the required info
          myGame(user,link)
        }) 
    })
  }

  function myGame (user, link) {
    // clear items in userchoice
    if (document.querySelector("#userc")){
      userc = document.querySelector("#userc")
      while(userc.firstChild){
        userc.removeChild(userc.lastChild)
      }
    }
    
    // clear items in compchoice
    if (document.querySelector("#compc")){
      compc = document.querySelector("#compc")
      while(compc.firstChild){
        compc.removeChild(compc.lastChild)
      }
    }

    // clear items in fight
    myNode = document.querySelector("#fight")
    while(myNode.firstChild){
      myNode.removeChild(myNode.lastChild)
    }
    
    fight.className = "fight"
    // create items inside fight div
    userchoice = document.createElement("div")
    userchoice.className = "userchoice choice"
    userchoice.setAttribute("id", "userc")
    middle = document.createElement("div")
    h1 = document.createElement("h1")
    h1.className = ("outcomeheading")
    middle.append(h1)
    middle.className = "outcome"
    compchoice = document.createElement("div")
    compchoice.className = "compchoice choice"
    compchoice.setAttribute("id", "compc")
    // add to fight div
    fight.append(userchoice)
    fight.append(middle)
    fight.append(compchoice)

    // get user image
    firimg = document.createElement("img")
    firimg.className = ""
    firimg.src = link
    // get comp image
    secimg = document.createElement("img")
    secimg.className = ""
    // options, and choose random
    let computerOptions = ["ROCK", "PAPER", "SCISSORS"];
    let a = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    // from before
    let b = user

    // dynamically create img from choice
    secimg.src = `https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/${a.toLowerCase()}.png`
    
    div1 = document.createElement("div")
    div2 = document.createElement("div")
    div1.className = " ops "
    div2.className = " ops "

    rock1 = document.createElement("img")
    rock1.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/rock.png"
    rock1.className = "rockplaceholderleft"

    rock2 = document.createElement("img")
    rock2.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/rock.png"
    rock2.className = "rockplaceholderright"
    

    div1.append(firimg)
    div2.append(secimg)

    div1.append(rock1)
    div2.append(rock2)

    // add these images to site
    document.querySelector(".userchoice").append(div1)
    document.querySelector(".compchoice").append(div2)

    // refind images to overly winner sticker later
    userhand = document.querySelector("#userc")
    comphand = document.querySelector("#compc")

    // create winner sticker
    winimg = document.createElement("img")
    winimg.src = "winner.png"
    winimg.className = "winner"

    // get the outcome box, ready to populate
    outcome = document.querySelector(".outcomeheading")
    // logic for game
    if (a == "ROCK" && b == "SCISSORS"){
      lose++
      played++
      comphand.append(winimg)
      outcome.innerHTML = "You lose, rock blunts scissors"
    }
    else if (a == "SCISSORS" && b=="PAPER"){
      lose++
      played++
      comphand.append(winimg)
      outcome.innerHTML = "You lose, scissors cuts paper";
    }
    else if ( a== "PAPER" && b == "ROCK"){
      lose++
      played++
      comphand.append(winimg)
      outcome.innerHTML = "You lost, paper wraps rock";
    }
    else if (a == "SCISSORS" && b == "ROCK"){
      win++
      played++
      userhand.append(winimg)
      outcome.innerHTML = "You win, rock blunts scissors";
    }
    else if (a == "PAPER" && b == "SCISSORS"){
      win++
      played++
      userhand.append(winimg)
      outcome.innerHTML = "You win, scissors cuts paper";
    }
    else if ( a== "ROCK" && b == "PAPER"){
      win++
      played++
      userhand.append(winimg)
      outcome.innerHTML = "You win, paper wraps rock";
    }
    else if (a == b){
      drew++
      played++
      outcome.innerHTML = "Draw";
    }
    
    // update scoreboard with 3 second delay to match animation
    setTimeout(function() {
      won.innerHTML = win
      lost.innerHTML = lose
      draw.innerHTML = drew
      games.innerHTML = played
    }, 3000);
    
    // find play again div
    playagain = document.querySelector("#playagain")
    playagain.className = "playagain"

    // check for play again
    playbtn = document.querySelectorAll(".playbtn")
    playbtn.forEach(function(element){
        element.addEventListener("click", function(){
          if(element.getAttribute("value") == "yes"){
            // hide fight
            document.querySelector("#fight").classList = "hidden"
            // hide play again
            document.querySelector("#playagain").classList = "hidden"
            // call start function to get input
            start()
          }
          else{
          // no idea yet
          }
      })
    })
  }
});

