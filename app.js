let color = "black";

function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = document.querySelectorAll("div");
  board.style.gridTemplateColumns = `repeat(${size} ,1fr)`;
  board.style.gridTemplateRows = `repeat(${size} ,1fr)`;

  let amount = size * size;
  for (let index = 0; index < amount; index++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "black";
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    populateBoard(input);
  } else {
    console.log("Try entering smaller number!");
  }
}

function colorSquare() {
  if ((color === "random")) {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}


function reset() {
    let board = document.querySelector("div");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white")
}