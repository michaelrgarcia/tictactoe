const createPlayer = (name, marker) => {
    return { name, marker };
};

const gameBoard = (function() {
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
        create: function() {
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

            const turnMessage = document.createElement("p");
            turnMessage.classList.add("game-text");
            turnMessage.textContent = `${game.getActivePlayer().name}, your turn!`;
            documentMain.appendChild(turnMessage);
        },

        getBoard: function() {
            return board;
        },

        clickHandler: function() {
            window.addEventListener("click", function(event) {
                if (event.target.className === "play-button") {
                    event.target.parentNode.replaceChildren();
                    gameBoard.create();
                }
                if (event.target.className === "cell") {
                    if (event.target.className !== "cell checked") {
                        let selectedCell = event.target.dataset.cellnum;

                        game.playRound(selectedCell);
                    }
                    event.target.classList.add("checked");
                }
            });
        }
    };
})();

gameBoard.clickHandler();

const game = (function() {
    const player1 = createPlayer("Player 1", "X");
    const player2 = createPlayer("Player 2", "O");
    let activePlayer = player1;

    const board = gameBoard.getBoard();

    function switchPlayerTurn() {
        if (activePlayer === player1) activePlayer = player2;
        else activePlayer = player1; 

        const currentPlayerText = document.querySelector(".game-text");
        currentPlayerText.textContent = `${activePlayer.name}, your turn!`;
    }

    return {
        renderBoard: function() {
            const cells = document.querySelectorAll(".cell");
    
            cells.forEach((cell, marker) => {
                cell.textContent = board[marker];
            });
        },

        getActivePlayer: function() {
            return activePlayer;
        },

        playRound: function(cell) {
            board.splice(cell, 1, activePlayer.marker);
            game.renderBoard();
            switchPlayerTurn();
        }
    };
})();




