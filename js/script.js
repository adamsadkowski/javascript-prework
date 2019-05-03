// losowanie komputera

var computerMove, computerMove2, computerMove3, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else {
  computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '2') {
  computerMove2 = 'papier';
} else {
  computerMove2 = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove2);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '3') {
  computerMove3 = 'nożyce';
} else {
  computerMove3 = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove3);

// ruch gracza

var playerInput, playerMove, playerMove2, playerMove3;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else {
  playerMove = 'nieznany ruch';
}
printMessage('Twój ruch: ' + playerMove);
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '2') {
  playerMove2 = 'papier';
} else {
  playerMove2 = 'nieznany ruch';
}
printMessage('Twój ruch: ' + playerMove2);
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '3') {
  playerMove3 = 'nożyce';
} else {
  playerMove3 = 'nieznany ruch';
}
printMessage('Twój ruch: ' + playerMove3);