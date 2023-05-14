
const board1 = document.getElementById('board1');
const board2 = document.getElementById('board2');

initializeBoards();

function initializeBoards(){
    generateCells(board1);
    generateCells(board2);
}

function generateCells(board){
    for(let i = 0; i < 100; i++){
        const cell = document.createElement('div');
        board.appendChild(cell);
    }
}