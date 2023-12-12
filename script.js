// Default color
let color = "black";
let click = true;

let board = document.querySelector(".board");
let squares = board.querySelectorAll("div");
let mode = document.querySelector(".mode");

function populateBoard(size) {
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.addEventListener("mousedown", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    populateBoard(input);
  } else {
    alert("Value must be between 2 and 100!");
  }
}

function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

board.addEventListener("click", () => {
  // Toggle between coloring and not coloring modes.
  click = !click;
  if (!click) {
    mode.textContent = "Mode: Free-Cursor";
  } else {
    mode.textContent = "Mode: Coloring";
  }
});
