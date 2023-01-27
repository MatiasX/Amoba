let currentPlayer = "X";
let cells = document.getElementsByTagName("td");

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function() {
        if (this.textContent === "") {
            this.textContent = currentPlayer;
            this.classList.add(currentPlayer.toLowerCase());
            checkForWin();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
}

function checkForWin() {
    let winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winningCombinations.length; i++) {
        if (cells[winningCombinations[i][0]].textContent === currentPlayer &&
            cells[winningCombinations[i][1]].textContent === currentPlayer &&
            cells[winningCombinations[i][2]].textContent === currentPlayer) {
                alert(currentPlayer + " nyert!");
                resetBoard();
        }
    }
}

function resetBoard() {
    for (let i = 0; i < cells.length; i++);
}
    cells();
