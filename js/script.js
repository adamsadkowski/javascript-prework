console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = buttonName;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
printMessage(displayResult(playerMove, computerMove));

var argButtonName, button_paper, button_rock, button_scissors, buttonTest;

buttonTest = document.getElementById('button-test');
buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
button_rock = document.getElementById('button-rock');
button_rock.addEventListener('click', function(){ buttonClicked('Kamień'); });
button_paper = document.getElementById('button-paper');
button_paper.addEventListener('click', function(){ buttonClicked('papier'); });
button_scissors = document.getElementById('button-scissors');
button_scissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

function buttonClicked(buttonName){
    clearMessages();
    console.log(buttonName + 'został kliknięty')

/**
* Describe this function...
*/
function getMoveName(argMoveId) {
console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
if (argMoveId == 2) {
return 'papier';
}
if (argMoveId == 3) {
return 'nożyce';
}
if (argMoveId == 1) {
return 'kamień';
} else {
printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
return 'kamień';
}
}


/**
* Describe this function...
*/
function displayResult(argPlayerMove, argComputerMove) {
console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
if(argPlayerMove == argComputerMove) {
return 'remis'
}
if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
return 'Wygrywasz!';
}
if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
return 'Wygrywasz!';
}
if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
return 'Wygrywasz!';
} else {
return 'Przegrywasz!';
}
}

buttonTest.addEventListener('click', function(){
    buttonClicked('Test button')
});
buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
button_rock.addEventListener('click', function(){ buttonClicked('Kamień'); });
button_paper.addEventListener('click', function(){ buttonClicked('papier'); });
button_scissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
}