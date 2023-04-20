const cells = document.querySelectorAll("td");
let currentPlayer = "X";
const resetButton = document.getElementById("reset-button");

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

const checkForWinner = () => {
    for (let i = 0; i < winningCombinations.length; i++) {
        let countX = 0;
        let countO = 0;
        for (let j = 0; j < winningCombinations[i].length; j++) {
            if (cells[winningCombinations[i][j] - 1].textContent === "X") {
                countX++;
            } else if (cells[winningCombinations[i][j] - 1].textContent === "O") {
                countO++;
            }
        }
        if (countX === 3) {
            alert("X wins!");
            return;
        } else if (countO === 3) {
            alert("O wins!");
            return;
        }
    }
}

const resetGame = () => {
    for (const cell of cells) {
        cell.textContent = "";
    }
    currentPlayer = "X";
}

for (const cell of cells) {
    cell.addEventListener("click", function(event) {
        event.target.textContent = currentPlayer;
        currentPlayer = (currentPlayer === "X" ? "O" : "X");
        checkForWinner();
    });
}

resetButton.addEventListener("click", resetGame);
