weaponSelection = document.querySelectorAll(".choice");
winLose = document.querySelector(".win-lose");
healthAlly = document.querySelector(".health-ally");
healthEnemy = document.querySelector(".health-enemy");
weaponSelection.forEach(function(element) {
    element.addEventListener("click", rps)
})

function rps() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {roundResult("win")}
    else if (num === 1) {roundResult("lose")}
    else {roundResult("draw")}
}

function roundResult(result) {
    if (result === "win") {winLose.textContent = "You strike!";
    healthEnemy.value -= 20;}
    else if (result === "lose") {winLose.textContent = "You take a hit!";
    healthAlly.value -= 20;
    }
    else {winLose.textContent = "Your weapons clash in midair."}

    if (healthAlly.value === 0) {gameResult("lose")}
    else if (healthEnemy.value === 0) {gameResult("win")}
}

function gameResult(result) {
    if (result === "win") {winLose.textContent = "You won!";
    weaponSelection.forEach(function(element) {
        element.removeEventListener("click", rps)})}
    else {winLose.textContent = "You lost!";
    weaponSelection.forEach(function(element) {
        element.removeEventListener("click", rps)})}}