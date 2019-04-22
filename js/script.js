var computerMove, playerMove, playerMove2, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else {
  computerMove = 'nieznany ruch';
}
if (randomNumber == '2') {
  playerMove = 'papier';
} else {
  playerMove = 'nieznany ruch';
}
if (randomNumber == '3') {
  playerMove2 = 'nożyce';
} else {
  playerMove2 = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);
printMessage('Mój ruch: ' + playerMove);
printMessage('Mój ruch: ' + playerMove2);