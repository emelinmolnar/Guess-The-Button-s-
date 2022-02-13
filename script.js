var numberOfButtons = 0;
var firstTime = true;
function startGame() {
    do {
        var typeOfGame = window.prompt("Which type of game do you want to play?\n1 - Normal\n2 - Extended\nType \"1\" or \"2\"");
        if(typeOfGame == null) {
            return;
        }
        if(typeOfGame == 1) {
            alert("You chose the Normal Mode.");
            numberOfButtons = 3;
            //break;
        }
        else if(typeOfGame == 2) {
            alert("You chose the Extended mode");
            numberOfButtons = window.prompt("How many buttons do you want to be in the game?");
            alert("Good you chose " + numberOfButtons + " buttons. Remember, only one of 'em is the winner");
            //break;
        }
        else {
            alert("Please pick again. Type \"1\" or \"2\"");
        }
    }while(typeOfGame != 1 && typeOfGame != 2);
    if(firstTime == true) {
        var startButton = document.getElementById('startGameButton');
        startButton.parentNode.removeChild(startButton);
    }
    

    var winner = Math.floor(Math.random() * numberOfButtons) + 1; //Random number between 1 and the number of Buttons.

    for(var i = 1; i <= numberOfButtons; i++) {
        let btn = document.createElement("button");
        btn.innerHTML = "Button " + i;
        btn.type = "button";
        btn.id = "button" + i;
        if(i === winner) {
            btn.classList.add('btn');
            btn.classList.add('btn-success');
            btn.name = "winner"
        }
        else {
            btn.classList.add('btn');
            btn.classList.add('btn-danger');
            btn.name = "loser";
        }
        document.body.appendChild(btn);
        btn.setAttribute('onClick', 'getClickedButtonName(this.name);');   
    }
    
}

function removeAllButtons() { 
    for(var i = 1; i <= numberOfButtons; i++) {
        var elem = document.getElementById("button" + i);
        elem.parentNode.removeChild(elem);
    }
    firstTime = false;
}
function getClickedButtonName(name) {
    if(name == "winner") {
        alert("Good Job, you found it. Loading the game Again...");
        removeAllButtons(numberOfButtons);
        numberOfButtons = 0;
        startGame();
    }
    else {
        alert("This is not the winner button, try again.");
    }
}
