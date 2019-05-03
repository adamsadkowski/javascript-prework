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