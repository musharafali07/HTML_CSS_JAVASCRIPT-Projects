// Musharaf Ali

const x = "x";
const ocircle = "circle";
const combination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const winningMessageElement = document.getElementById("winningMessage");
const restartButton = document.getElementById("restartButton");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
let circleTurn;

startGame();

restartButton.addEventListener("click", startGame);

function startGame() {
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.classList.remove(x);
    cell.classList.remove(ocircle);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
  winningMessageElement.classList.remove("show");
}

// placeMark
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}


// checkWin
function checkWin(currentClass) {
  return combination.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}

// isDraw
function isDraw() {
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(x) || cell.classList.contains(ocircle)
    );
  });
}

// swapTurns
function swapTurns() {
  circleTurn = !circleTurn;
}

// setBoardHoverClass
function setBoardHoverClass() {
  board.classList.remove(x);
  board.classList.remove(ocircle);
  if (circleTurn) {
    board.classList.add(ocircle);
  } else {
    board.classList.add(X_CLASS);
  }
}

// endGame
function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = "Draw!";
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
  }
  winningMessageElement.classList.add("show");
}

// handleClick
function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? ocircle : x;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } 
  else if (isDraw()) {
    endGame(true);
  } 
  else {
    swapTurns();
    setBoardHoverClass();
  }
}









