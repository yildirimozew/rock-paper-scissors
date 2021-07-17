function computerMove () {
    let randint = Math.floor(Math.random() * 3);
    if (randint === 0) {
        return main("rock");
    }
    else if (randint === 1) {
        return main("paper");
    }
    else {
        return main("scissors");
    }
}

function main(computerMove) {
    let playerMove = window.prompt("Please type in your move").toLowerCase();
    if (playerMove === computerMove) {
        return result(playerMove, computerMove, 0)
    }
    else {
        if (playerMove === "rock") {
            if (computerMove === "paper") {
                return result(playerMove, computerMove, 2)
            }
            else {
                return result(playerMove, computerMove, 1)
            }          
        }
        else if (playerMove === "paper") {
            if (computerMove === "scissors") {
                return result(playerMove, computerMove, 2)
            }
            else {
                return result(playerMove, computerMove, 1)
    }
    
}
        else {
            if (computerMove === "rock") {
                return result(playerMove, computerMove, 2)
            }
            else {
                return result(playerMove, computerMove, 1)
    }
}
    }
}
function result(playerMove, computerMove, resultNum) {
    if (resultNum === 0)  {return "It's a tie!"}
    else if (resultNum === 1) {playerScore += 1;
        return playerMove + " beats " + computerMove + ". Player wins!";
        }
    else {computerScore += 1;
        return computerMove + " beats " + playerMove + ". Computer wins!";
        }
}

function counter() {
    for (; playerScore < 5 && computerScore < 5;) {
        alert(computerMove());

    }
    if (playerScore === 5) {
        alert("Player wins!")
    }
    else {
        alert("Computer wins!")
    }
    
}

let playerScore = 0;
let computerScore = 0;
counter();