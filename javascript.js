const game = (function() {
    const board = [
        "","","",
        "","","",
        "","",""
    ];
    
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return {
        createBoard: function() {
            const documentMain = document.querySelector("main");
            const gameGrid = document.createElement("div");
            gameGrid.classList.add("gameboard-grid");
            documentMain.appendChild(gameGrid);

            for (let i = 0; i < 9; i++) {
                let cell = document.createElement("button");
                cell.classList.add("cell");
                cell.setAttribute("data-cellnum", i)
                gameGrid.appendChild(cell);
            }
        },
        getBoard: function() {
            return board;
        }
    };
})();

const displayController = (function() {
    return {
        renderBoard: function() {
            const cells = document.querySelectorAll(".cell");
    
            cells.forEach((cell, marker) => {
                cell.textContent = game.getBoard()[marker];
            });
        }
    };
})();

const misc = (function() {
    return {
        clickHandler: function() {
            window.addEventListener("click", function(event) {
                if (event.target.className === "play-button") {
                    event.target.parentNode.replaceChildren();
                    game.createBoard();
                }
                if (event.target.className === "cell") {
                    let cellNumber = event.target.dataset.cellnum;
                    game.getBoard().splice(cellNumber, 1, "X");
                    displayController.renderBoard();
                }
            });
        }
    }
})();

const createPlayer = (name, marker) => {

    return { name, marker };
};

misc.clickHandler();


