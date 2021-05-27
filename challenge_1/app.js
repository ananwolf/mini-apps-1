// set up a board state of array 8 indexes
// let the game board be empty arays so we can fill in X O

/* GLOBAL VARIABLES */
// Winning Condition hard-coded:
let winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
// Game Board
let gameState = ['', '', '', '', '', '', '', '', ''];
// current player, switch between X O and use this for played box
let currentPlayer = 'X';
// game counter
let gamesPlayed = 0;
// game check (grey out the board with CSS when game is over)
let activeGame = true;
// score trackers
let currentGame = 1;
let xScore = 0;
let oScore = 0;

/* FUNCTIONS */

// switching between X & O players
const handlePlayerChange = () => {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.querySelector('.currentPlayer').innerHTML = `Current Player: ${currentPlayer}`;
};

// check if box is filled
const handlePlayedBox = (box, index) => {
  // set the box clicked to the current player symbol
  gameState[index] = currentPlayer;
  // show the same on HTML
  box.innerHTML = currentPlayer
};

// handle click event for each box
const handleBoxClick = (event) => {
  let boxNumber = parseInt(event.target.getAttribute('data-box'));
  // check if box is filled, if so, return
  if(gameState[boxNumber] !== '' || !activeGame) {
    return;
  }
  // else, handlePlayedBox and check for winner
  handlePlayedBox(event.target, boxNumber);
  handleWinner();
}

// check if anyone won
const handleWinner = () => {
  let gameOver = false;
  for (let i = 0; i <= 7; i++) {
    const condition = winningConditions[i];
    let a = gameState[condition[0]];
    let b = gameState[condition[1]];
    let c = gameState[condition[2]];
    if (a === '' || b === '' || c === '') {
      continue;
    }
    if (a === b && b === c) {
      gameOver = true;
      break;
    }
  }
  if (gameOver) {
    document.querySelector('.currentPlayer').innerHTML = roundWinner();
    activeGame = false;
    return;
  }
  if (!gameState.includes('')) {
    document.querySelector('.currentPlayer').innerHTML = draw();
    activeGame = false;
    return;
  }
  // if (!activeGame) {
  //   document.querySelectorAll('.box').forEach((box) => {

  //   })
  // }
  handlePlayerChange();
};

// clear current board
const handleClearButton = () => {
  activeGame = true;
  currentPlayer = 'X';
  gameState = ['', '', '', '', '', '', '', '', ''];
  document.querySelector('.currentPlayer').innerHTML = `Current Player: ${currentPlayer}`;
  document.querySelectorAll('.box').forEach((box) => {
    box.innerHTML = '';
  })
};

// reset entire game
const handleResetButton = () => {

};

// RESULT MESSAGES
const roundWinner = () => `${currentPlayer} won!`;
const draw = () => `Tie Game, try again!`;

// Linking click functionality to class
document.querySelectorAll('.box').forEach((box) => {
  box.addEventListener('click', handleBoxClick)
});
document.querySelector('.clear').addEventListener('click', handleClearButton);
document.querySelector('.restart').addEventListener('click', handleResetButton);