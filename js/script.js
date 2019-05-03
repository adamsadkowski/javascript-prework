var argComputerMove, argComputerMove2, argComputerMove3, argMoveId, argMoveId2, argMoveId3, argPlayerMove, argPlayerMove2, argPlayerMove3, computerMove, computerMove2, computerMove3, playerInput, playerMove, playerMove2, playerMove3, randomNumber;

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
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
function getMoveName2(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId2);
  if (argMoveId2 == 2) {
    return 'papier';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

/**
 * Describe this function...
 */
function getMoveName3(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId3);
  if (argMoveId3 == 3) {
    return 'nożyce';
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
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

/**
 * Describe this function...
 */
function displayResult2(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove2 + ', ' + argComputerMove2);
  if (argPlayerMove2 == 'kamień' && argComputerMove2 == 'nożyce') {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

/**
 * Describe this function...
 */
function displayResult3(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove3 + ', ' + argComputerMove3);
  if (argPlayerMove3 == 'nożyce' && argComputerMove3 == 'papier') {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove3 + ', a Ty ' + argPlayerMove3);
}
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
playerMove2 = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerInput);
playerMove3 = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerInput);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);