let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let turnO = true; //playerX, playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

resetBtn.addEventListener("click", resetGame);

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (
            boxes[a].innerText &&
            boxes[a].innerText === boxes[b].innerText &&
            boxes[a].innerText === boxes[c].innerText
        ) {
            alert(`${boxes[a].innerText} wins!`);
            disableAllBoxes();
            return;
        }
    }

    // Check for a tie
    if ([...boxes].every((box) => box.innerText)) {
        alert("It's a tie!");
        disableAllBoxes();
    }
};

function disableAllBoxes() {
    boxes.forEach((box) => (box.disabled = true));
}

function resetGame() {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
}





