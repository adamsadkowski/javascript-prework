function printMessage(msg){
  var div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
  }
  
  function clearMessages(){
  document.getElementById('messages').innerHTML = '';
  }
  
  
  
  let buttonName, button_paper, button_rock, button_scissors;
  
  /**
  * Describe this function...
  */
  function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  let computerMove, playerMove, randomNumber;
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
  
  playerMove = buttonName;
  console.log('wybór ruchu gracza to: ' + argButtonName);
  
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  printMessage(displayResult(argButtonName, computerMove));
  }
  button_rock = document.getElementById('button-rock');
  button_rock.addEventListener('click', function(){ buttonClicked('kamień'); });
  button_paper = document.getElementById('button-paper');
  button_paper.addEventListener('click', function(){ buttonClicked('papier'); });
  button_scissors = document.getElementById('button-scissors');
  button_scissors.addEventListener('click', function(){ buttonClicked('nożyce'); });