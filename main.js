let color = "black";
let click = true;
let warning = document.querySelector('.warning');
warning.style.display = 'none';
let colorGrid = document.querySelector(".colors-container");
colorGrid.style.visibility = "hidden";

function setSize(){
  let size = document.querySelector('input').value;
  if(Number.isInteger(parseInt(size)) == false){
    warning.textContent = 'Must be a number';
    warning.style.display = 'block';
    return;
  }
  if(size < 2 || size > 100){
    warning.textContent = 'Must be a number between 2 to 100';
    warning.style.display = 'block';
      return;
    }
  warning.style.display = 'none';
  populateBoard(size);
}

function populateBoard(size) {
  let board = document.querySelector(".board");
  board.innerHTML = '';
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);


function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice.path[0].innerHTML;
}

function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}


function colors(){
  let color = document.querySelector(".colors");
  color.style.gridTemplateColumns = `repeat(${4} , 1fr)`;
  color.style.gridTemplateRows = `repeat(${4} , 1fr)`;
  let colorBoard = ["black", "white", "red", "blue", "green", "yellow", "orange", "grey", "pink", "purple", "brown", "olive", "cyan", "magenta", "lime", "maroon"]

  for (let i = 0; i < 16; i++) {
    let square = document.createElement("div");
    square.textContent = colorBoard[i];
    square.style.color = colorBoard[i];
    square.style.fontSize = '1px'
    square.addEventListener("click", changeColor);
    square.style.backgroundColor = colorBoard[i];
    color.insertAdjacentElement("beforeend", square);
  }
}

colors();

function toggleColors(){
  let x = document.querySelector(".colors-container");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}



