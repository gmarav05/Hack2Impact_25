function populateBoard (size) {
    let board = document.querySelector(".board");
    let squares = document.querySelectorAll("div");
    board.style.gridTemplateColumns = `repeat(${size} ,1fr)`;
    board.style.gridTemplateRows = `repeat(${size} ,1fr)`;


    let amount = size * size;
    for (let index = 0; index <  amount; index++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        })
        square.style.backgroundColor = "green";
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
