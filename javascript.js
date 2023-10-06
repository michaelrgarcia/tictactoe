const gameBoard = (function() {
    const board = [
        "X", "X", "X", 
        "O", "X", "X", 
        "X", "X", "X"
    ];

    return {
        render: function() {
            const cells = document.querySelectorAll(".cell");
    
            cells.forEach((cell, symbol) => {
                cell.textContent = board[symbol];
            });
        }
    }
})();

gameBoard.render();

const displayController = (function() {

})();

const Player = (name) => {

};